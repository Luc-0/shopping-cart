import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <Link
      className="product-card "
      to={{
        pathname: `/shop/${props.product.id}`,
        product: props.product,
      }}
    >
      <div className="product-card-image">
        <img src={props.product.image} />
      </div>
      <div className="product-card-details">
        <p>{props.product.name}</p>
        <strong>${props.product.price}</strong>
      </div>
    </Link>
  );
};

export default ProductCard;
