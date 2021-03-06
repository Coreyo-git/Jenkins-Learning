using Microsoft.AspNetCore.Mvc;
using shopping_api.Data;
using shopping_api.Models;

namespace shopping_api.Controllers;

[ApiController]
public class GetProducts : ControllerBase
{

  private DatabaseContext _db;

  public GetProducts(DatabaseContext db)
  {
    _db = db;
  }

  // Gets all the products in order from postgresql 
  [HttpGet]
  [Route("/api/get_products")]
  public IActionResult GetAllProducts()
  {
    // If the quote table is empty return 404
    if (!_db.products.Any())
    {
      return NotFound("No Products in Table");
    }
    // Creates an enumerable list of products from the database
    // Order by ID

    IEnumerable<Product> products = _db.products
        .OrderBy(x => x.id)
        .Take(20);

    return Ok(products);
  }

}
