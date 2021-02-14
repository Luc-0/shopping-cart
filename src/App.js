import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop/Shop';
import Product from './components/Shop/Product';
import Cart from './components/Cart/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    setProductsFromJson();
  }, []);

  useEffect(() => {
    let newTotalPrice = cartItems.reduce((totalPrice, currentItem) => {
      const currentItemPrice = currentItem.product.price * currentItem.quantity;
      return totalPrice + currentItemPrice;
    }, 0);
    newTotalPrice = Math.round((newTotalPrice + Number.EPSILON) * 100) / 100;

    setCartTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <div className="app">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/shop"
            component={() => <Shop products={products} />}
          />
          <Route
            exact
            path="/shop/:id"
            component={() => (
              <Product
                handleAddToCart={handleAddToCart}
                getProductById={getProductById}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            component={() => (
              <Cart
                handleIncreaseQuantity={handleIncreaseQuantity}
                handleDecreaseQuantity={handleDecreaseQuantity}
                handleRemoveFromCart={handleRemoveFromCart}
                handleCartQuantityChange={handleCartQuantityChange}
                cartItems={[...cartItems]}
                totalPrice={cartTotalPrice}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );

  function handleAddToCart(itemData) {
    const newCartItems = JSON.parse(JSON.stringify(cartItems));
    let indexOfItem = newCartItems.findIndex(
      (cartItem) => cartItem.product.id === itemData.product.id
    );

    if (indexOfItem !== -1) {
      newCartItems[indexOfItem].quantity += +itemData.quantity;
      setCartItems(newCartItems);
    } else {
      const newCartItem = {
        product: itemData.product,
        quantity: +itemData.quantity,
      };

      newCartItems.push(newCartItem);
      setCartItems(newCartItems);
    }
  }

  function handleIncreaseQuantity(productId) {
    const newCartItems = JSON.parse(JSON.stringify(cartItems));
    const indexOfItem = newCartItems.findIndex(
      (item) => item.product.id == productId
    );

    const newQuantity = newCartItems[indexOfItem].quantity + 1;

    if (newQuantity > 99) {
      newCartItems[indexOfItem].quantity = 99;
    } else {
      newCartItems[indexOfItem].quantity = newQuantity;
    }

    setCartItems(newCartItems);
  }

  function handleDecreaseQuantity(productId) {
    const newCartItems = JSON.parse(JSON.stringify(cartItems));
    const indexOfItem = newCartItems.findIndex(
      (item) => item.product.id == productId
    );

    const newQuantity = newCartItems[indexOfItem].quantity - 1;

    if (newQuantity <= 0) {
      newCartItems[indexOfItem].quantity = 1;
    } else {
      newCartItems[indexOfItem].quantity = newQuantity;
    }

    setCartItems(newCartItems);
  }

  function handleCartQuantityChange(e, productId) {
    const newCartItems = JSON.parse(JSON.stringify(cartItems));
    const indexOfItem = newCartItems.findIndex(
      (item) => item.product.id == productId
    );

    const newValue = +e.target.value;

    if (newValue <= 0) {
      newCartItems[indexOfItem].quantity = 1;
    } else if (newValue > 99) {
      newCartItems[indexOfItem].quantity = 99;
    } else {
      newCartItems[indexOfItem].quantity = newValue;
    }

    setCartItems(newCartItems);
  }

  function handleRemoveFromCart(productId) {
    const newCartItems = JSON.parse(JSON.stringify(cartItems));
    const indexOfItem = newCartItems.findIndex(
      (item) => item.product.id == productId
    );
    newCartItems.splice(indexOfItem, 1);

    setCartItems(newCartItems);
  }

  async function setProductsFromJson() {
    const res = await fetch('products.json');
    const data = await res.json();
    setProducts(data);
  }

  function getProductById(id) {
    return products.find((product) => product.id == id);
  }
}

export default App;
