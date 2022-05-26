using shopping_api.Models;
using Microsoft.EntityFrameworkCore;
using shopping_api.Data.DBSeed;

namespace shopping_api.Data
{
  public class DatabaseContext : DbContext
  {
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {

    }

    // public DatabaseContext() : base() { }

    public DbSet<Product> products { get; set; }
    public DbSet<ProductList> product_list { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Product>().Property(p => p.id).ValueGeneratedOnAdd();
      modelBuilder.Entity<ProductList>().Property(pl => pl.id).ValueGeneratedOnAdd();
      modelBuilder.ApplyConfiguration(new ProductSeed());

    }
  }
}
