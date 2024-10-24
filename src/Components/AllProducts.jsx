import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const AllProducts = ({ HAddToCart }) => {
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

  return (
    <div className="w-2/3">
      <h1 className="text-center font-bold text-2xl py-10">
        ---- All Products ----
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <Product
            HAddToCart={HAddToCart}
            key={product.SKU}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
};

AllProducts.propTypes = {
  HAddToCart: PropTypes.func,
};

export default AllProducts;
