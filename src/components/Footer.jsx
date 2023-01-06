import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import PersonalLogo from '../assets/personal_logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row_column">
          <Link to="/">
            <figure className='footer__logo'>
              <img src={Logo} className='footer__logo--img' />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className='footer__link'>Home</Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/books" className='footer__link'>Books</Link>
            <Link to="/cart" className='footer__link'>Cart</Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2022 Book Bay
          </div>
          <figure className="footer__personal--logo">
            <img src={PersonalLogo} className="personal__logo--img" />
          </figure>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
