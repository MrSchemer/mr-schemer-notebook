
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Publications', path: '/publications' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="border-b border-border">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="no-underline">
          <h1 className="text-lg md:text-xl tracking-tighter">Mr. Schemer</h1>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="nav-link text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-14 left-0 right-0 bg-background border-b border-border z-50 md:hidden animate-fade-in">
            <div className="flex flex-col px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
