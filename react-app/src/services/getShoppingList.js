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
            price: 1600
        }
    ]
    return shoppingList
    // const response = await fetch("https://localhost:5001/api/get_shopping_list");
    // if (response.ok) {
    //   return response.json();
    // }
  }
  