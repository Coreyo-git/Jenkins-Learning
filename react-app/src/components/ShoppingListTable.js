import { getShoppingList } from "../services/getShoppingList";
import React, { useState, useEffect } from "react";

function ShoppingListTable() {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getShoppingList().then((list) => {
      if (mounted) {
        setShoppingList(list);
      }
    });
    return () => (mounted = false);
  }, []); // INITIAL MOUNT !!! Calls services/getShoppingList.js and mounts on initial render

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
                        {item.name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {item.quantity}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        ${item.price}
                      </td>
                      <td> Remove Buttons </td>
                    </tr>,
                  ];
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingListTable;
