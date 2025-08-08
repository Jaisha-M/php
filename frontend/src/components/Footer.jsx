import React from 'react';
import { Mail, Globe, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-bruwrite-blue to-bruwrite-teal relative pt-16 pb-8">
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_dc024922-a41d-4ef4-98f5-941e7821bf50/artifacts/dg6ixgbu_Bruwrite%20Logo%201-25.png" 
                alt="Bruwrite Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              We're not just another resume service. We're career transformation specialists who turn your work history into interview gold.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Mail className="h-4 w-4" />
                <span>hello@bruwrite.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Globe className="h-4 w-4" />
                <span>Global Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-medium text-white mb-4">What We Do</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Resume Makeovers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-200"
                >
                  ATS Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Career Strategy Calls
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-200"
                >
                  LinkedIn Tweaks
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-serif font-medium text-white mb-4">Learn More</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Our Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="flex items-center justify-center flex-wrap gap-8 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/30"></div>
            <div>80%+ Interview Success Rate</div>
            <div className="hidden sm:block h-4 w-px bg-white/30"></div>
            <div>500+ Careers Transformed</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-white/70">
            <div className="mb-4 sm:mb-0">
              © {currentYear} Bruwrite. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="hover:text-white transition-colors duration-200">
                Refund Policy
              </button>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-500/20 border border-green-300 rounded-lg px-4 py-2 text-green-300 text-sm font-medium">
            <Shield className="h-4 w-4 mr-2" />
            Interview Calls or Your Money Back — Promise
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;