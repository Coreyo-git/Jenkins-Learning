export async function postNewProductToList(
  product, quantity, price
) {

  const productData = {
    product: product,
    quantity: quantity,
    price: price  
  };

  try {
    await fetch("http://10.0.0.76:5000/api/post_new_product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then(() => {
        console.log("Product Added to DB: " + productData.product + " | quantity:" + productData.quantity + " | price: $" + productData.price);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (err) {
    console.log(err);
  }
}

