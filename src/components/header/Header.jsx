import React from 'react';
import Search from './Search'
import Cart from './Cart'
import './header.scss';

const Header = () => {
    console.log('s');

  return (
    <header className='header'>
      
      <div className="menu-block">
         <div className="line-wrapper">
            <Search />
          <Cart />
         </div>
     

        
      </div>
    </header>
  );
};

export default Header;
