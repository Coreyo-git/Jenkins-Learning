using Microsoft.AspNetCore.Mvc;
using shopping_api.Data;
using shopping_api.Models;

namespace shopping_api.Controllers;

[ApiController]
[Route("[controller]")]
public class RemoveProductFromList : ControllerBase
{
    private DatabaseContext _db;

    public RemoveProductFromList(DatabaseContext db)
    {
        _db = db;
    }

    [HttpDelete]
    [Route("/api/delete_product/{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        // Grabs the quote number record from the database and removes the quote by number
        ProductList? currentProduct = _db.product_list.Where(pl => pl.id == id).FirstOrDefault();

        if (currentProduct?.id > 0)
        {
            _db.product_list.Remove(currentProduct);


            
            await _db.SaveChangesAsync();
            return Ok("Deleted Quote");
        }

        else if (currentProduct?.id == 0)
        {
            return NotFound("Error");
        }

        else
        {
            return BadRequest("Error the Quote table is empty or couldn't be accessed");
        }
    }
}