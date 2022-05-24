export async function getShoppingList() {
    let shoppingList = [
        {
            name: "product 1",
            quantity: 2,
            price: 200
        },
        {
            name: "product 2",
            quantity: 8,
            price: 8*200
        }
    ]
    return shoppingList
    // const response = await fetch("http://localhost:5000/api/get_products");
    // if (response.ok) {
    //   return response.json();
    // }
  }
  