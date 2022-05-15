export async function getProducts() {
    let products = [
        {
            name: "product 1",
            price: 100
        },
        {
            name: "product 2",
            price: 200
        },
        {
            name: "product 3",
            price: 300
        },
        {
            name: "product 4",
            price: 400
        },
        {
            name: "product 5",
            price: 500
        },
    ]
    return products
    // const response = await fetch("http://localhost:5000/api/get_products");
    // if (response.ok) {
    //   return response.json();
    // }
  }
  