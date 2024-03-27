
import React from "react";
import ProductList from "./Products";
function Cart({productsList,addToCart,handleIncrease,handleDecrease,cartItems,setProductsList}) {

const Totalcost=productsList.reduce((total, product) => total + product.price, 0);

const handleIncrease1 = (index) => {
    const updatedProductsList = [...productsList];
    const updatedProduct = { ...updatedProductsList[index] }; // Create a copy of the product
    const costToAdd = updatedProduct.price; // Get the price of the product
    updatedProduct.price += costToAdd; // Increase the price by the product's price
    updatedProductsList[index] = updatedProduct; // Update the product in the list
    setProductsList(updatedProductsList); // Update the products list state
};

const handleDecrease1 = (index) => {
    const updatedProductsList = [...productsList];
    const updatedProduct = { ...updatedProductsList[index] }; // Create a copy of the product
    const costToSubtract = updatedProduct.price/2; // Get half of the price of the product
    updatedProduct.price -= costToSubtract; // Decrease the price by half
    updatedProductsList[index] = updatedProduct; // Update the product in the list
    setProductsList(updatedProductsList); // Update the products list state
};


const handleRemove = (index) => {
    const updatedProductsList = productsList.filter((_, i) => i !== index);
    setProductsList(updatedProductsList);
};

return (
        <div>
            <h2>Shopping Cart</h2>
            {productsList.map((product, index) =>(
                <div key={index}>
                <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }}/>
                <p>{product.name}</p>
                <div>

    <button onClick={() => handleIncrease1(index)}>
    +
    </button>


    <button onClick={() => handleDecrease1(index)}>
-
    </button>
    <br>
    </br>

    <button onClick={() => handleRemove(index)}>Remove</button>
                </div>
                   
                <p>{product.price}</p>
                </div>
            ))}
            <h>
                Total cost is:{Totalcost}
            </h>
        </div>
    );
}
export default Cart;


// import React, { useState } from "react";
// import ProductList from "./Products";

// function Cart({ productsList, addToCart ,cartItems,handleIncrease,handleDecrease}) {
//   const Totalcost = cartItems.reduce(
//     (total, product) => total + product.price * product.quantity,0);

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {cartItems.map((product, index) => (
//         <div key={index}>
//           <img
//             src={product.image}
//             alt={product.name}
//             style={{ width: "100px", height: "100px" }}
//           />
//           <p>{product.name}</p>
//           <div>
//             <button onClick={() => handleIncrease(index)}>+</button>
//             <button onClick={() => handleDecrease(index)}>-</button>
//           </div>
//           <p>
//         {product.price} x {product.quantity}
//           </p>
//         </div>
//       ))}
//       <h4>Total cost is Rs {Totalcost}</h4>
//     </div>
//   );
// }

// export default Cart;

