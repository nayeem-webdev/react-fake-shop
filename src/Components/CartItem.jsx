import PropTypes from "prop-types";
const CartItem = ({ cartItem, hDeleteCartItem }) => {
  return (
    <div>
      <div className="flex items-center justify-between border-b py-4">
        <div className="flex items-center">
          <img
            className="w-16 h-16 object-cover rounded mr-4"
            src={cartItem.productImage}
            alt={`Image of ${cartItem.productName}`}
          />
          <div>
            <h2 className="font-bold text-lg">{cartItem.productName}</h2>
            <p className="text-gray-600">Quantity: 1</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-lg font-bold text-green-600">৳ {cartItem.price}</p>
          <button
            onClick={() => hDeleteCartItem(cartItem)}
            className="ml-4 bg-red-500 text-white p-1 rounded hover:bg-red-700"
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired,
  hDeleteCartItem: PropTypes.func,
};
export default CartItem;
