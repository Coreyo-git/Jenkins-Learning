export async function getProducts() {
  const response = await fetch("https://localhost:5001/api/get_products");
  if (response.ok) {
    return response.json();
  }
}
