import React from 'react';
import Book from './ui/Book';
import { books } from '../data.js';

const Featured = () => {console.log(books)
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="blue">Books</span>
          </h2>
          <div className="books">
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
