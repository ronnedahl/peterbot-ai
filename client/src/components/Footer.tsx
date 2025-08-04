import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Developer Portfolio Peter Andersson
          </p>
          
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;