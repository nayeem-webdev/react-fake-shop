import Cart from "./Cart";
import PropTypes from "prop-types";

const SideBar = ({ cartItems, hDeleteCartItem }) => {
  return (
    <div className="w-1/3 bg-gray-100">
      <h1 className="text-center font-bold text-2xl py-10">
        SIDE BAR
      </h1>
      <div>
        <Cart cartItems={cartItems} hDeleteCartItem={hDeleteCartItem}></Cart>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  cartItems: PropTypes.array,
  hDeleteCartItem: PropTypes.func,
};
export default SideBar;
