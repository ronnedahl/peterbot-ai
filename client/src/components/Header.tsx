import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-6xl">
        <div className="text-2xl font-bold">
          <span className="text-blue-500">Peter</span>Bot.Dev
        </div>
        
        <nav>
          <ul className={`md:flex md:space-x-8 ${
            isMenuOpen
              ? "fixed top-[72px] left-0 w-full flex flex-col bg-white dark:bg-gray-900 shadow-md py-4 z-50"
              : "hidden md:flex"
          }`}>
            <li className={isMenuOpen ? "text-center py-4" : ""}>
              <a 
                href="#about" 
                className="font-medium text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                onClick={closeMenu}
              >
                Om Mig
              </a>
            </li>
            <li className={isMenuOpen ? "text-center py-4" : ""}>
              <a 
                href="#skills" 
                className="font-medium text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                onClick={closeMenu}
              >
                Kunskaper
              </a>
            </li>
            <li className={isMenuOpen ? "text-center py-4" : ""}>
              <a 
                href="#ai-experience" 
                className="font-medium text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                onClick={closeMenu}
              >
                AI Erfarenhet
              </a>
            </li>
            <li className={isMenuOpen ? "text-center py-4" : ""}>
              <a 
                href="#contact" 
                className="font-medium text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                onClick={closeMenu}
              >
                Kontakt
              </a>
            </li>
          </ul>
          
          <button
            className="md:hidden flex flex-col justify-between w-7 h-5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-full bg-gray-800 dark:bg-gray-100 rounded transition-transform duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-full bg-gray-800 dark:bg-gray-100 rounded transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-gray-800 dark:bg-gray-100 rounded transition-transform duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;