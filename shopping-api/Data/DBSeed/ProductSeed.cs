using shopping_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace shopping_api.Data.DBSeed
{
  public class ProductSeed : IEntityTypeConfiguration<Product>
  {
    public void Configure(EntityTypeBuilder<Product> builder)
    {
      builder.HasData
      (
        new Product
        {
          id = 1,
          product = "Shoes",
          price = 100
        },
        new Product
        {
          id = 2,
          product = "Pants",
          price = 200
        },
        new Product
        {
          id = 3,
          product = "Shirt",
          price = 300
        },
        new Product
        {
          id = 4,
          product = "Watch",
          price = 400
        },
        new Product
        {
          id = 5,
          product = "Necklace",
          price = 500
        }
      );
    }
  }
}