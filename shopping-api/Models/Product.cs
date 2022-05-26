using System.ComponentModel.DataAnnotations;

namespace shopping_api.Models
{
  public class Product
  {
    [Key]
    [Required]
    public int id { get; set; }

    [Required]
    [MaxLength(50)]
    public string product { get; set; }
    
    [Required]
    public int price { get; set; }

    public Product()
    {
      product = "";
      price = 0;
    }
  }
}