import React from 'react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center z-50 shadow-lg transition-all duration-300 hover:scale-110 ${
        darkMode 
          ? 'bg-gray-800 border border-gray-700' 
          : 'bg-white border border-gray-200'
      }`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <i className="fa-solid fa-sun text-yellow-400 text-lg"></i>
      ) : (
        <i className="fa-solid fa-moon text-gray-700 text-lg"></i>
      )}
    </button>
  );
};

export default ThemeToggle;