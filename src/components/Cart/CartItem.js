import React, { useState } from 'react';
import './CartItem.css';

const CartItem = (props) => {
  const [cartItem, setCartItem] = useState(props.cartItem);

  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={cartItem.product.image} />
      </div>
      <div className="cart-item-details">
        <span>Name</span>
        <p className="margin-tb-auto">{cartItem.product.name}</p>
      </div>
      <div className="cart-item-details">
        <span>Quantity</span>
        <div className="margin-tb-auto cart-item-quantity">
          <button
            onClick={() => {
              props.handleDecreaseQuantity(cartItem.product.id);
            }}
            className="cart-item-btn"
          >
            -
          </button>
          <input
            value={cartItem.quantity}
            onChange={(e) => {
              props.handleCartQuantityChange(e, cartItem.product.id);
            }}
            type="number"
            min="1"
          />
          <button
            onClick={() => {
              props.handleIncreaseQuantity(cartItem.product.id);
            }}
            className="cart-item-btn"
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-details">
        <span>Price</span>
        <strong className="margin-tb-auto">$ {cartItem.product.price}</strong>
      </div>
      <button
        onClick={() => {
          props.handleRemoveFromCart(cartItem.product.id);
        }}
        className="cart-item-btn"
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
