import Product from "./Product";
import PropTypes from "prop-types";

const AllProducts = ({ HAddToCart, products }) => {
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
  products: PropTypes.array.isRequired,
};

export default AllProducts;
