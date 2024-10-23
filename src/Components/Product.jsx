import PropTypes from "prop-types";
const Product = ({ product, HAddToCart }) => {
  console.log(product);
  const {
    SKU,
    productName,
    price,
    isFeatured,
    category,
    productImage,
    description,
  } = product;

  return (
    <div id={SKU}>
      <div className="max-w-sm rounded overflow-hidden shadow-xl border p-4">
        <img
          className="w-full h-48 object-cover"
          src={productImage}
          alt={`Image of ${productName}`}
        />
        <div className="py-4">
          <h2 className="font-bold text-xl mb-2">
            {productName}
            <span>
              {isFeatured && (
                <span className="text-yellow-600 text-xs ml-2">
                  <i className="fa-solid fa-star"></i>
                </span>
              )}
            </span>
          </h2>
          <p className="text-gray-700 text-base mb-2 h-12 overflow-hidden">
            {description}
          </p>
          <p className="font-bold text-xl text-green-600">
            <span className="text-md font-extrabold">৳</span> {price}
          </p>
          <span>
            <p className="text-sm text-stone-400">Category: {category}</p>
          </span>
          <button
            onClick={() => HAddToCart(product)}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  HAddToCart: PropTypes.func,
};
export default Product;
