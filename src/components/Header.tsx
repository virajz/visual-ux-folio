
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-charcoal/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <RouterLink to="/" className="text-2xl font-inter font-bold text-white">
          Viraj Zaveri<span className="text-electricBlue">.</span>
        </RouterLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#projects" className="text-white hover:text-electricBlue transition-colors">Projects</a>
          <a href="#case-studies" className="text-white hover:text-electricBlue transition-colors">Case Studies</a>
          <a href="#about" className="text-white hover:text-electricBlue transition-colors">About</a>
          <a href="#contact" className="text-white hover:text-electricBlue transition-colors">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-charcoal z-40">
          <nav className="flex flex-col items-center pt-12 space-y-8 text-lg">
            <a href="#projects" className="text-white hover:text-electricBlue transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#case-studies" className="text-white hover:text-electricBlue transition-colors" onClick={toggleMenu}>Case Studies</a>
            <a href="#about" className="text-white hover:text-electricBlue transition-colors" onClick={toggleMenu}>About</a>
            <a href="#contact" className="text-white hover:text-electricBlue transition-colors" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
