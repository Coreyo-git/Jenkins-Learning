import ShoppingListSelection from "./ShoppingItemSelection";
import ShoppingListTable from "./ShoppingListTable";
import React, { useEffect, useState } from "react";
import { getProducts } from "../services/getProducts";

function Body() {
  const [products, setProducts] = useState([]); // stores the product names as an array
  const [shoppingList, setShoppingList] = useState([]); // The shopping list
  const [productSelection, setProductSelection] = useState({}); // State of the selected products
  const [shoppingListUpdate, setShoppingListUpdate] = useState(false); // State of the selected shopping list

  // When Mounted calls getProducts service to generate the products as an object array
  useEffect(() => {
    let mounted = true;
    getProducts().then((products) => {
      if (mounted) {
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
        shoppingListUpdate={shoppingListUpdate}
        setShoppingListUpdate={setShoppingListUpdate}
        setProductSelection={setProductSelection}
        productSelection={productSelection}
      />
      <ShoppingListTable
        shoppingList={shoppingList}
        shoppingListUpdate={shoppingListUpdate}
        setShoppingListUpdate={setShoppingListUpdate}
        setShoppingList={setShoppingList}
      />
      <h1>Hello I just updated this!</h1>
    </div>
  );
}

export default Body;
