import CartItem from "./CartItem";
import PropTypes from "prop-types";

const Cart = ({ cartItems, hDeleteCartItem }) => {
  return (
    <div>
      {cartItems.map((cartItem) => (
        <CartItem
          key={cartItem.SKU + Date.now()}
          cartItem={cartItem}
          hDeleteCartItem={hDeleteCartItem}
        ></CartItem>
      ))}
    </div>
  );
};
Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  hDeleteCartItem: PropTypes.func,
};
export default Cart;
