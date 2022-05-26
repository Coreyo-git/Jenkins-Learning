export async function getProducts() {
  const response = await fetch("https://10.0.0.76:5001/api/get_products");
  if (response.ok) {
    return response.json();
  }
}
