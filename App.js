import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './Products';
import Cart from './Cart';
import React,{useState} from 'react';

function App() {
 const [productsList, setProductsList] = useState([]);
 const [cartItems, setCartItems] = useState([]);


// const handleDecrease = (index) =>{
//   const updatedCartItems = [...cartItems];
//   if (updatedCartItems[index].quantity > 1) {
//     updatedCartItems[index].quantity -= 1; // Decrease quantity by 1
//     setCartItems(updatedCartItems);
//   }
// };


 const addToCart = (product) => {
  setProductsList([...productsList, product]);
};

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<ProductList productsList={productsList} addToCart={addToCart}  cartItems={cartItems} />} />
          <Route path="/cart"  exact element={<Cart addToCart={addToCart} productsList={productsList}  cartItems={cartItems}  setProductsList={setProductsList} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;














// App.js
// import React, { useState } from "react";
// import ProductList from './Products';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// function App() {
//   const [productsList, setProductsList] = useState([]);

//   return (
//     <div>
//      <Router>
//             <Routes>
//                 <Route path="/" exact productsList={productsList} />
//                 <Route path="/cart" Cart={Cart} />
//             </Routes>
//         </Router>

//     </div>

//   );
// }

// export default App;

