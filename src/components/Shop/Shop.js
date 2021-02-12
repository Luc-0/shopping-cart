import React from 'react';
import ProductCard from './ProductCard';
import './Shop.css';

const Shop = (props) => {
  return (
    <div className="product-display">
      {props.products && props.products.length > 0
        ? props.products.map((product) => (
            <ProductCard
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />
          ))
        : null}
    </div>
  );
};

export default Shop;
