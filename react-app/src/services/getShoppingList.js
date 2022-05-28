export async function getShoppingList() {
    const response = await fetch("http://10.0.0.76:5000/api/get_shopping_list");
    if (response.ok) {
      return response.json();
    }
  }
  