export async function deleteProduct(id) {
    try {
      const response = await fetch(
        "http://10.0.0.76:5000/api/delete_product/" + id,
        { method: "DELETE" }
      );
      if (response.ok) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }
}