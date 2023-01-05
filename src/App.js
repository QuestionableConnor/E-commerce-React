import React, { useState, useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import { books } from './data.js'
import BookInfo from './pages/BookInfo.jsx';
import Cart from './pages/Cart.jsx';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id);
    setCart((oldCart) =>
      dupeItem
        ? [
          ...oldCart.map((item) => {
            return item.id === dupeItem.id
              ? {
                ...item,
                quantity: item.quantity + 1,
              }
              : item;
          }),
        ]
        : [...oldCart, { ...book, quantity: 1 }]
    );
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
            ...item,
            quantity: +quantity
          }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="/books/:id" element={<BookInfo books={books} addItemToCart={addItemToCart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart}
            changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
