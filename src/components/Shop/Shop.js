import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProductsFromJson();
  }, []);

  async function setProductsFromJson() {
    const res = await fetch('products.json');
    const data = await res.json();
    setProducts(data);
  }

  return (
    <div className="product-display">
      {products.length > 0
        ? products.map((product) => (
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
