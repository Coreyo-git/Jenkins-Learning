using shopping_api.Models;
using shopping_api.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DB Connection Configuration
builder.Services.AddDbContext<DatabaseContext>(options =>
{
  options.UseNpgsql(builder.Configuration.GetConnectionString("DBConnection"));
});

builder.Services.AddCors(options =>
      {
        options.AddPolicy(name: MyAllowSpecificOrigins,
                           policy =>
                           {
                             policy.WithOrigins("*")
                                   .AllowAnyOrigin()
                                   .AllowAnyMethod()
                                   .AllowAnyHeader();
                           });

      });

builder.WebHost.UseUrls("http://*:5000"); // Fixes CORS error

var app = builder.Build();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.Urls.Add("http://*:5000");
//app.Urls.Add("https://*:5001");

app.UseCors(MyAllowSpecificOrigins);

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
