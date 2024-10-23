import CartItem from "./CartItem";

const Cart = ({cartItems}) => {
  return (
    <div>
      <CartItem cartItems={cartItems}></CartItem>
    </div>
  );
};
Cart.propTypes = {
    cartItems: PropTypes.array,
  };
export default Cart;
