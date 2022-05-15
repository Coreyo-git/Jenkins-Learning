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
    ]
    return products
    // const response = await fetch("http://localhost:5000/api/get_products");
    // if (response.ok) {
    //   return response.json();
    // }
  }
  