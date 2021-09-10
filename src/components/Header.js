import logo from '../images/Logo.svg'
import React from 'react';

function Header () {

  return (
    <div className='header'>
      <img className='header__logo' src={logo} alt='лого'/>
    </div>
  );
};

export default Header;