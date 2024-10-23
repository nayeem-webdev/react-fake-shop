import { useState } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const HAddToCart = (product) => {
    console.log("consoleClick", product);
    // setCartItems([...cartItems, product]);
    setCartItems((pre) => [...pre, product]);
  };

  const hDeleteCartItem = (product) => {
    console.log("hello brother", product);
    const newArray = cartItems.filter((item) => item.id !== product.id);
    console.log(newArray);
    // console.log(product);
    setCartItems(newArray);
  };

  console.log(cartItems);
  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto flex px-5 gap-5">
        <AllProducts HAddToCart={HAddToCart}></AllProducts>
        <SideBar
          cartItems={cartItems}
          hDeleteCartItem={hDeleteCartItem}
        ></SideBar>
      </div>
    </>
  );
}

export default App;
