import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

const BookInfo = ({ books }) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className='book__link'>
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to='/books'>
                <h2 className='book__selected--title--top'>
                  Books
                </h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  className='book__selected--img' />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">
                    Summary
                  </div>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur repellat obcaecati, optio sequi facere,
                    totam cumque adipisci quibusdam fugiat recusandae vel ratione
                    error vero consequatur perspiciatis sapiente. Perferendis, id nostrum?
                  </p>
                  <p className="book__summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur repellat obcaecati, optio sequi facere,
                    totam cumque adipisci quibusdam fugiat recusandae vel ratione
                    error vero consequatur perspiciatis sapiente. Perferendis, id nostrum?
                  </p>
                </div>
                <button className='btn'>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top"></h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
