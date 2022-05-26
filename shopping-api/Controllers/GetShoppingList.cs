using Microsoft.AspNetCore.Mvc;
using shopping_api.Data;
using shopping_api.Models;

namespace shopping_api.Controllers;

[ApiController]
public class GetShoppingList : ControllerBase
{

  private DatabaseContext _db;

  public GetShoppingList(DatabaseContext db)
  {
    _db = db;
  }

  // Gets all the products in order from postgresql 
  [HttpGet]
  [Route("/api/get_shopping_list")]
  public IActionResult GetList()
  {
    // If the quote table is empty return 404
    if (!_db.product_list.Any())
    {
      return NotFound("No Products in Table");
    }
    // Creates an enumerable list of products from the database
    // Order by ID

    IEnumerable<ProductList> product_list = _db.product_list
        .OrderBy(x => x.id)
        .Take(20);

    return Ok(product_list);
  }

}
