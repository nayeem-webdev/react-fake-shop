import { useState } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const HAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    // setCartItems((pre) => [...pre, product]);
  };

  const hDeleteCartItem = (product) => {
    const newArray = cartItems.filter((item) => item.id !== product.id);

    setCartItems(newArray);
  };

  const SearchProductByInput = (e) => {
    console.log(e);
  };

  const clearCart = () => {
    const noItem = [];
    setCartItems(noItem);
  };
  return (
    <>
      <Navbar
        cartItems={cartItems}
        SearchProductByInput={SearchProductByInput}
      ></Navbar>
      <div className="container mx-auto flex px-5 gap-5">
        <AllProducts HAddToCart={HAddToCart}></AllProducts>
        <SideBar
          cartItems={cartItems}
          hDeleteCartItem={hDeleteCartItem}
          clearCart={clearCart}
        ></SideBar>
      </div>
      <footer className="w-full text-center py-10 mt-10 bg-gray-200">
        Thanks for visiting | All rights Reserved Md Nayeem Uddin (c)
      </footer>
    </>
  );
}

export default App;
