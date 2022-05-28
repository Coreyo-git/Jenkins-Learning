export async function getProducts() {
  const response = await fetch("http://10.0.0.76:5000/api/get_products");
  if (response.ok) {
    return response.json();
  }
}
