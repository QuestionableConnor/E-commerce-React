import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Book1 from '../../assets/book-1.jpg'


const Book = () => {
  return (
    <div className="book">
      <a href="">
        <figure className='book__img--wrapper'>
          <img src={Book1} className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className='book__title--link'>
          Release
        </a>
      </div>
      <div className="book__ratings">
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star-half-alt" />
      </div>
      <div className="book__price">
        <span className="book__price--normal">$29.99</span>
        $19.99
      </div>
    </div>
  );
}

export default Book;
