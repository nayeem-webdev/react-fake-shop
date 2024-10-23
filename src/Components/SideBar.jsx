import Cart from "./Cart";
import PropTypes from "prop-types";

const SideBar = ({ cartItems }) => {
  return (
    <div className="w-1/3 border-2 border-red-500">
      <h1 className="text-center font-bold text-2xl py-10">
        SIDE BAR NOT MODER BAR
      </h1>
      <div>
        <Cart cartItems={cartItems}></Cart>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  cartItems: PropTypes.array,
};
export default SideBar;
