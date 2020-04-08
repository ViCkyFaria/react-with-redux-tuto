import React from 'react';

import logo from '../assets/images/logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <p className="title">React exemplos</p>
    </header>
  );
}

export default Header;