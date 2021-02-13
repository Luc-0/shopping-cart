import React, { useEffect, useState } from 'react';
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
          <select value={quantity} onChange={handleQuantityChange}>
            {getNumberOption(10)}
          </select>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );

  function handleQuantityChange(e) {
    const newValue = e.target.value;
    setQuantity(newValue);
  }

  function getNumberOption(num) {
    const options = [];

    for (let i = 0; i < num; i++) {
      const option = <option key={i}>{i + 1}</option>;
      options.push(option);
    }

    return options;
  }
};

export default Product;
