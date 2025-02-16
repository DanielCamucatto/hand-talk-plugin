import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`flex justify-center fixed w-full top-0 z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center">
        <div className="w-full flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Logo</h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden w-3xs justify-between md:flex items-center space-x-4">
            <a href="/" className="hover:text-blue-500 ml-inline-8">Home</a>
            <a href="/sobre" className="hover:text-blue-500 mx-8">Sobre</a>
            <a href="/contato" className="hover:text-blue-500 mx-8">Contato</a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-800'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Botão Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg mr-2 ${isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-100 text-gray-800'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto px-4">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <a href="/" className="block px-3 py-2 rounded-md hover:text-blue-500">Home</a>
            <a href="/sobre" className="block px-3 py-2 rounded-md hover:text-blue-500">Sobre</a>
            <a href="/contato" className="block px-3 py-2 rounded-md hover:text-blue-500">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};
