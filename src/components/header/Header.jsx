import React from 'react';
import { BsFacebook } from 'react-icons/Bs';
import { AiOutlineGoogle, AiOutlineYoutube } from 'react-icons/Ai';
import Search from './Search'
import Cart from './Cart'
import './header.scss';

const testArr = ['Автомобили', 'Недвижемость', 'Победители']

const Header = ({ categoriesArray = testArr }) => {
  console.log('s');
  const handleBurgerClick = () => console.log('burger clicked');
  return (
    <header className='header'>
      <div className='header__top-line'>
        <div className="header__top-line_wrapper">
          <div className="burger" onClick={handleBurgerClick}><span></span></div>
          <a href="#" className="logo">FORTEX</a>
        </div>
        <div className="header__socials">
          <a href="#"><BsFacebook />
          </a>
          <a href="#">
            <AiOutlineGoogle />
          </a>
          <a href="#">
            <AiOutlineYoutube />
          </a>
        </div>
      </div>
      <div className="menu-block">
        <div className="line-wrapper">
          <Search />
          <Cart />
        </div>
        <div className='categories'>
          <button className="categories__btn">←</button>
          <ul className='categories__list'>
            {/* change index to item ID with valid data */}
            {categoriesArray.map((item, index) => <li key={index} className="categories__item">{item}</li>)}
          </ul>
          <button className="categories__btn">→</button>
        </div>
      </div>

    </header>
  );
};

export default Header;
