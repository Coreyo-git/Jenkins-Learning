using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace shopping_api.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "product_list",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    product = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    quantity = table.Column<int>(type: "integer", nullable: false),
                    price = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_product_list", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "products",
                columns: table => new
                {
                    id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    product = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    price = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_products", x => x.id);
                });

            migrationBuilder.InsertData(
                table: "product_list",
                columns: new[] { "id", "price", "product", "quantity" },
                values: new object[,]
                {
                    { 1, 300, "Shoes", 3 },
                    { 2, 800, "Pants", 4 },
                    { 3, 300, "Shirt", 1 },
                    { 4, 400, "Watch", 1 },
                    { 5, 1000, "Necklace", 2 }
                });

            migrationBuilder.InsertData(
                table: "products",
                columns: new[] { "id", "price", "product" },
                values: new object[,]
                {
                    { 1, 100, "Shoes" },
                    { 2, 200, "Pants" },
                    { 3, 300, "Shirt" },
                    { 4, 400, "Watch" },
                    { 5, 500, "Necklace" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "product_list");

            migrationBuilder.DropTable(
                name: "products");
        }
    }
}
