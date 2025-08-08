import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-bruwrite-blue/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_dc024922-a41d-4ef4-98f5-941e7821bf50/artifacts/dg6ixgbu_Bruwrite%20Logo%201-25.png" 
              alt="Bruwrite Logo" 
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-bruwrite-blue hover:bg-white/90 px-6 py-2 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-bruwrite-blue shadow-lg border-t border-white/20">
            <div className="flex flex-col py-4 px-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-white/90 hover:text-white transition-colors duration-200 font-medium py-2"
              >
                Pricing
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-white text-bruwrite-blue hover:bg-white/90 w-full mt-2"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;