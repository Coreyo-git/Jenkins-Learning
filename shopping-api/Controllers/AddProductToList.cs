using Microsoft.AspNetCore.Mvc;
using shopping_api.Data;
using shopping_api.Models;

namespace shopping_api.Controllers;

[ApiController]
[Route("[controller]")]
public class AddProductToList : ControllerBase
{
  private DatabaseContext _db;

  public AddProductToList(DatabaseContext db)
  {
    _db = db;
  }

  [HttpPost]
  [Route("/api/add_product/{product}")]
  public IActionResult AddProduct(ProductList product)
  {
    if (product != null)
    {
      _db.product_list.Add(product);

    }
    return Ok();
  }
}