export async function getProducts() {
  const response = await fetch("https://localhost:5001/api/get_products");
  if (response.ok) {
    return response.json();
  }
  // let products = [
  //     {
  //         name: "Shoes",
  //         price: 100
  //     },
  //     {
  //         name: "Pants",
  //         price: 200
  //     },
  //     {
  //         name: "Shirt",
  //         price: 300
  //     },
  //     {
  //         name: "Watch",
  //         price: 400
  //     },
  //     {
  //         name: "Necklace",
  //         price: 500
  //     },
  // ]
  // return products
}
