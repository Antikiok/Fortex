import React from 'react';

const Header = () => {
  const showSidebar = () => {
    console.log('sidebar is showed');
  };

  return (
    <>
      <nav className="navbar-line">
        <div className="nav-block">
          <div className="header__burger" onClick={showSidebar}>
            <span></span>
          </div>
          <a className="navbar-brand" href="{{ url('/'.app()->getLocale()) }}">
            <img src="/images/logo.png" alt="logo" />
          </a>
        </div>
      </nav>
      <div className="nav-social">
        <a className="" href="#">
          <i className="">VK </i>
        </a>
        <a className="" href="#">
          <i className="">VK </i>
        </a>
        <a className="" href="#">
          <i className="">VK </i>
        </a>
      </div>
      <div className="menu-block">
        <form method="post" action="/search" className="search-form">
          <input type="text" name="search" id="search" className="search" autoComplete="off" />
          <button type="submit" className="search-button">
            <i className="icon-search"></i>
          </button>
        </form>
        <a href="/login" className="btn-border order-lg-3">
          <div className="btn-comein">Order?</div>
        </a>

        <a href="/cart" className="cart-block order-lg-3">
          <div className="cart">
            <i className="icon-cart"></i>
            <span className="text-600 cart-amount" style={{ marginLeft: '4px' }}></span>
          </div>
        </a>

        <div className="order-lg-1 order-xs-2 col-xs-12 menu-block">
          <div className="arrow-left-arrow">
            <i className="icon-arrow-prev"></i>
          </div>
          <div className="menu-mobile overflow-y">
            <li className="nav-item">
              <a href="{{ route('aboutUs') }}" className="menu-active">
                about?
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="menu-active">
                menu Item text
              </a>
            </li>
            <li className="nav-item">
              <a href="{{ route('winners') }}" className="menu-active">
                winners?
              </a>
            </li>
          </div>
          <div className="arrow-right-arrow">
            <i className="icon-arrow-next"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
