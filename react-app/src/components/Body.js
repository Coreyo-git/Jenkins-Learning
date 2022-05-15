import ShoppingListSelection from "./ShoppingItemSelection";
import ShoppingListTable from "./ShoppingListTable";
import React, { useEffect, useState } from "react";
import { getProducts } from '../services/getProducts';

function Body() {
  const [products, setProducts] = useState([]); // List of Products to choose from
  const [shoppingList, setShoppingList] = useState([]); // The shopping list
  const [productSelection, setProductSelection] = useState({}); // State of the selected products

  useEffect(() => {
    let mounted = true;
    getProducts().then((products) => {
      if (mounted) {
        setProducts(products)
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
