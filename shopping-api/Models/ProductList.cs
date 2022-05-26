using System.ComponentModel.DataAnnotations;

namespace shopping_api.Models
{
  public class ProductList
  {
    [Key]
    [Required]
    public int id { get; set; }

    [Required]
    public Product? product { get; set; }

    // Stores the total price of all products in the product list
    [Required]
    public int total_price { get; set; }
  }
}