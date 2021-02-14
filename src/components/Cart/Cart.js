import React from 'react';
import './Cart.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = props.cartItems;
  return (
    <div className="cart">
      {cartItems && cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem
              handleDecreaseQuantity={props.handleDecreaseQuantity}
              handleIncreaseQuantity={props.handleIncreaseQuantity}
              handleRemoveFromCart={props.handleRemoveFromCart}
              handleCartQuantityChange={props.handleCartQuantityChange}
              cartItem={cartItem}
            />
          ))}
          <div className="cart-checkout">
            <p>
              Total Price <strong>$ {props.totalPrice}</strong>
            </p>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Empty Cart</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
