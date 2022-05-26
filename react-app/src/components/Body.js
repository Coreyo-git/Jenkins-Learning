import ShoppingListSelection from "./ShoppingItemSelection";
import ShoppingListTable from "./ShoppingListTable";
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";

function Body() {
  const [products, setProducts] = useState([]); // stores the product names as an array
  const [shoppingList, setShoppingList] = useState([]); // The shopping list
  const [productSelection, setProductSelection] = useState({}); // State of the selected products

  // When Mounted calls getProducts service to generate the products as an object array
  useEffect(() => {
    let mounted = true;
    getProducts().then((products) => {
      if (mounted) {
        console.log(products)
        // set products to whats returned from getProducts
        setProducts(products);
      }
    });
    return () => (mounted = false);
  }, []); // INITIAL MOUNT !!! Calls services/getProducts.js and mounts on initial render
  return (
    <div>
      <ShoppingListSelection
        products={products}
        setProductSelection={setProductSelection}
        productSelection={productSelection}
      />
      <ShoppingListTable
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
    </div>
  );
}

export default Body;
