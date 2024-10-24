import Cart from "./Cart";
import PropTypes from "prop-types";

const SideBar = ({ cartItems, hDeleteCartItem, clearCart }) => {
  return (
    <div className="w-1/3">
      <h1 className="text-center font-bold text-2xl py-10">SIDE BAR</h1>
      <div className="border p-5 rounded-md">
        <Cart cartItems={cartItems} hDeleteCartItem={hDeleteCartItem}></Cart>
        <div className="flex justify-between mt-4">
          <p className="font-bold text-lg">TOTAL:</p>
          <div className="flex">
            <p className="text-green-600 font-bold text-lg">
              {cartItems
                .reduce((init, { price }) => init + price, 0)
                .toFixed(2)}
            </p>
            <button
              title="Clear Cart"
              onClick={() => clearCart()}
              className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// {cartItems
//   .reduce((init, { price }) => init + price, 0)
//   .toFixed(2)}

SideBar.propTypes = {
  cartItems: PropTypes.array,
  hDeleteCartItem: PropTypes.func,
  clearCart: PropTypes.func,
};
export default SideBar;
