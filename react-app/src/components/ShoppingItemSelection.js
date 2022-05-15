function ShoppingItemSelect({ products }) {
  return (
    <div className="flex justify-left flex-direction: row">
      {/* Products Selection box, holds all available products as a drop down */}
      <div className="px-2 mb-3 w-30">
        Products: <select
          className="form-select appearance-none
            px-3 py-1.5 text-base font-normal
            text-gray-700 bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          {/* Maps the products names to a options within the selection box */}
          <option disabled>Product</option>
          {products.map(product => 
           <option>{product.name}</option>
        )}
        </select>
      </div>

      {/* Stores the Quantity of items value 
          Will be used to calculate price x Quantity eventually*/}
      
      <div className=" px-2 mb-3 w-1/5">
        Quantity :
        <input
          type="number"
          className="w-1/2 px-2 py-1.5 text-base font-normal text-gray-400
            bg-white bg-clip-padding border border-solid 
            border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-400 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="quantity"
          placeholder="1"
        />
      </div>

      {/*  Stores the price in a disabled textbox */}
      <div className="mb-3 w-1/6">
        Price: $
        <input
          type="text"
          className="w-1/2 px-3 py-1.5 text-base
            font-normal text-gray-700 bg-gray-100 
            bg-clip-padding border border-solid border-gray-300 
            rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="priceTextBox"
          placeholder="0"
          aria-label="Price of product"
          disabled
        />
      </div>

      {/*  Will add product to shopping list on click */}
      <button
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="px-3 h-9 bg-blue-600 text-white 
        font-medium text-xs rounded shadow-md hover:bg-blue-700 hover:shadow-lg
         focus:bg-blue-700 focus:shadow-lg focus:outline-none
         focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Add Product
      </button>
    </div>
  );
}

export default ShoppingItemSelect;
