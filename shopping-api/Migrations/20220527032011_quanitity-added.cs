using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace shopping_api.Migrations
{
    public partial class quanitityadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "quantity",
                table: "product_list",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "quantity",
                table: "product_list");
        }
    }
}
