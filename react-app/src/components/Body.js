import ShoppingListSelection from "./ShoppingItemSelection";
import ShoppingListTable from "./ShoppingListTable";
import React, { useState } from "react";

function Body() {
  const [products, setProducts] = useState([
    {
      product: "Product 1",
      price: 100,
    },
    {
      product: "Product 2",
      price: 200,
    },   
  ]);
  const [shoppingList, setShoppingList] = useState([]);
  const [shoppingSelection, setShoppingSelection] = useState({});

  return (
    <div>
      <ShoppingListSelection
        products={products}
        setShoppingSelection={setShoppingSelection}
        shoppingSelection={shoppingSelection}
      />
      <ShoppingListTable
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
    </div>
  );
}

export default Body;
