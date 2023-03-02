import React from 'react';
import FontSelect from './FontSelect';
import ModeToggle from './ModeToggle';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="basis-1/2 md:basis-2/3">
        <img src="../../assets/logo.svg" alt="" />
      </div>
      <div className="flex items-center justify-between basis-1/2 md:basis-1/3">
        <FontSelect />
        <ModeToggle />
        <img src="../../assets/icon-moon.svg" alt="Dark Mode Icon" />
      </div>
    </nav>
  );
};

export default Navbar;
