import { getShoppingList } from "../services/getShoppingList";
import React, { useState, useEffect } from "react";
import { deleteProduct } from "../services/deleteProduct";

function ShoppingListTable({shoppingListUpdate, setShoppingListUpdate}) {
  const [shoppingList, setShoppingList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Sums all the shoppingList items to a total price
  function sumTotalPrice(list) {
    var i;
    var sum = 0;
    for (i = 0; i < list.length; i++) {
      sum += list[i].price
    }
    return sum
  }

  // Updates the shopping list state
  async function updateShoppingList() {
    getShoppingList().then((list) => {
      setShoppingList(list)
      setTotalPrice(sumTotalPrice(list));
    })  
  }

  useEffect(() =>{
    if(shoppingListUpdate === true){
      setShoppingListUpdate(false);
      updateShoppingList();
    }
    
  }, [shoppingListUpdate])

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      updateShoppingList();
    }
    return () => (mounted = false);
  }, []); // INITIAL MOUNT !!! Calls services/getShoppingList.js and mounts on initial render

// ------ Delete Quote Logic ----------------------------
  //
  // Alerts the user with information in which quote they're deleting
  // Confirm calls ~/services/deleteQuote.js
  async function deleteProductCheck(index,id, product, quantity){
    if (window.confirm("Are you sure you want to remove #"+index+" "+product +" Quantity: "+quantity)) {      
      // asynchronously sends a fetch delete method and returns true if correct
      // only returns true when a quote is successfully deleted
      if (await deleteProduct(id) === true) {
        // re render the shopping list
        updateShoppingList();

      } else { console.log('Error deleting Product') }

    } else { console.log("User Canalled product deletion") }
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b bg-gray-800">
                <tr>
                <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4 text-left"
                  >
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Map rows of the shopping list by index */}
                {shoppingList.map((item, i) => {
                  return [
                    <tr
                      key={i}
                      className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    >
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.product}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.quantity}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        ${item.price}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button className="bg-red-600 hover:bg-yellow-700 text-white font-bold py-1.5 px-3 border border-white-700 rounded"
                        onClick={() =>
                          deleteProductCheck(
                            i + 1,
                            item.id,
                            item.product,
                            item.quantity
                          )
                        }>
                          &#128465;
                        </button>
                      </td>
                    </tr>,
                  ];
                })}

                <tr className="">
                  <td></td><td></td><td></td>
                  <td className="text-md text-black-900 font-dark py-1">
                    Total: ${totalPrice}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingListTable;
