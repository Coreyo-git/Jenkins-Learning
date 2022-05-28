using shopping_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace shopping_api.Data.DBSeed
{
  public class ProductListSeed : IEntityTypeConfiguration<ProductList>
  {
    public void Configure(EntityTypeBuilder<ProductList> builder)
    {
      builder.HasData
      (
        new ProductList
        {
          id = 1,
          product = "Shoes",
          quantity = 3,
          price = 300
        },
        new ProductList
        {
          id = 2,
          product = "Pants",
          quantity = 4,
          price = 800
        },
        new ProductList
        {
          id = 3,
          product = "Shirt",
          quantity = 1,
          price = 300
        },
        new ProductList
        {
          id = 4,
          product = "Watch",
          quantity = 1,
          price = 400
        },
        new ProductList
        {
          id = 5,
          product = "Necklace",
          quantity = 2,
          price = 1000
        }
      );
    }
  }
}