import { useState, useEffect } from "react";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";

function App() {
  // Loading all Products and setting it on var products.
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch("/Data/fakeProduct.json");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    };
    loadProducts();
  }, []);

  // Search Filter
  const SearchProductByInput = (e) => {
    console.log(e);
  };

  // ! Cart Function

  // Cart Items and setting it on var cartItems.
  const [cartItems, setCartItems] = useState([]);

  // Add To cart
  const HAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    // setCartItems((pre) => [...pre, product]);
  };

  // Delete from Cart
  const hDeleteCartItem = (product) => {
    const newArray = cartItems.filter((item) => item.id !== product.id);

    setCartItems(newArray);
  };

  // Clear Cart
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
        <AllProducts products={products} HAddToCart={HAddToCart}></AllProducts>
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
