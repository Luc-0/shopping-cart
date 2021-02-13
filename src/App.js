import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Shop from './components/Shop/Shop';
import Product from './components/Shop/Product';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProductsFromJson();
  }, []);

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
            component={() => <Product getProductById={getProductById} />}
          />
        </Switch>
      </Router>
    </div>
  );

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
