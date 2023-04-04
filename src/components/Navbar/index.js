import React from "react";
import StyledWrapper from './StyledWrapper';

const Navbar = () => {
  return (
    <StyledWrapper className="w-full site-navbar">
      <div>
        <header className="flex justify-between items-center py-4 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <h1 className="text-lg font-bold text-gray-800">uptime</h1>
          </div>
          <nav className="flex items-center">
            <a
              href="/"
              className="ml-6 text-sm font-medium text-gray-800 hover:text-gray-900"
            >
              Environments
            </a>
            <a
              href="/services"
              className="ml-6 text-sm font-medium text-gray-800 hover:text-gray-900"
            >
              Services
            </a>
          </nav>
        </header>
      </div>
    </StyledWrapper>
  )
};

export default Navbar;
