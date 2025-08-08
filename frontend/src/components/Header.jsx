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
        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="https://customer-assets.emergentagent.com/job_dc024922-a41d-4ef4-98f5-941e7821bf50/artifacts/dg6ixgbu_Bruwrite%20Logo%201-25.png" 
              alt="Bruwrite Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-bruwrite-blue transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-slate-700 hover:text-bruwrite-blue transition-colors duration-200 font-medium"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-700 hover:text-bruwrite-blue transition-colors duration-200 font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-slate-700 hover:text-bruwrite-blue transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-bruwrite-blue hover:bg-bruwrite-blue/90 text-white px-6 py-2 transition-all duration-200 transform hover:scale-105"
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
              className="text-slate-700"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="flex flex-col py-4 px-4 space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-slate-700 hover:text-bruwrite-blue transition-colors duration-200 font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-left text-slate-700 hover:text-bruwrite-blue transition-colors duration-200 font-medium py-2"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-slate-700 hover:text-bruwrite-blue transition-colors duration-200 font-medium py-2"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-slate-700 hover:text-bruwrite-blue transition-colors duration-200 font-medium py-2"
              >
                Pricing
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-bruwrite-blue hover:bg-bruwrite-blue/90 text-white w-full mt-2"
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