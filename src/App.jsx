import { useState } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const HAddToCart = (product) => {
    console.log(product, "added to cart");
    setCartItems([...cartItems, product]);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto flex px-5 gap-5">
        <AllProducts HAddToCart={HAddToCart}></AllProducts>
        <SideBar cartItems={cartItems}></SideBar>
      </div>
    </>
  );
}

export default App;
