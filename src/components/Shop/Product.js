import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
  const product = props.getProductById(useParams().id);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="product-img">
        <img src={product.image} />
      </div>
      <div className="product-detail">
        <div className="product-name-price">
          <p>{product.name}</p>
          <strong>$ {product.price}</strong>
        </div>

        <div className="product-cart-add">
          <div className="product-cart-quantity">
            <button
              onClick={() => {
                handleDecreaseQuantity();
              }}
            >
              -
            </button>
            <input value={quantity} onChange={handleQuantityChange} />
            <button
              onClick={() => {
                handleIncreaseQuantity();
              }}
            >
              +
            </button>
          </div>

          <button
            onClick={() => {
              props.handleAddToCart({
                product: product,
                quantity: quantity,
              });
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );

  function handleIncreaseQuantity() {
    const newQuantity = quantity + 1;

    if (newQuantity <= 99) {
      setQuantity(quantity + 1);
    }
  }

  function handleDecreaseQuantity() {
    const newQuantity = quantity - 1;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  }

  function handleQuantityChange(e) {
    const newValue = +e.target.value;
    if (newValue > 99 || newValue < 1) {
      return;
    }

    setQuantity(newValue);
  }
};

export default Product;
