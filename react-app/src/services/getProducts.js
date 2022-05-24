export async function getProducts() {
    let products = [
        {
            name: "Shoes",
            price: 100
        },
        {
            name: "Pants",
            price: 200
        },
        {
            name: "Shirt",
            price: 300
        },
        {
            name: "Watch",
            price: 400
        },
        {
            name: "Necklace",
            price: 500
        },
    ]
    return products
    // const response = await fetch("http://localhost:5000/api/get_products");
    // if (response.ok) {
    //   return response.json();
    // }
  }
  