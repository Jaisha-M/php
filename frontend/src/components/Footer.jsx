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
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_dc024922-a41d-4ef4-98f5-941e7821bf50/artifacts/dg6ixgbu_Bruwrite%20Logo%201-25.png" 
                alt="Bruwrite Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Professional resume writing service specializing in mid-to-senior level professionals. 
              We craft compelling career narratives that get you noticed by the right people.
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Mail className="h-4 w-4" />
                <span>hello@bruwrite.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <Globe className="h-4 w-4" />
                <span>Global Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-medium text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-bruwrite-teal transition-colors duration-200"
                >
                  Resume Writing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-bruwrite-teal transition-colors duration-200"
                >
                  ATS Optimization
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-bruwrite-teal transition-colors duration-200"
                >
                  Career Consultation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-bruwrite-teal transition-colors duration-200"
                >
                  LinkedIn Optimization
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-serif font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-bruwrite-teal transition-colors duration-200"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="hover:text-bruwrite-teal transition-colors duration-200"
                >
                  Our Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-bruwrite-teal transition-colors duration-200"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-bruwrite-teal transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          <div className="flex items-center justify-center space-x-8 text-slate-400 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-slate-600"></div>
            <div>80%+ Success Rate</div>
            <div className="hidden sm:block h-4 w-px bg-slate-600"></div>
            <div>500+ Professionals Served</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-slate-400">
            <div className="mb-4 sm:mb-0">
              © {currentYear} Bruwrite. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <button className="hover:text-bruwrite-teal transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="hover:text-bruwrite-teal transition-colors duration-200">
                Terms of Service
              </button>
              <button className="hover:text-bruwrite-teal transition-colors duration-200">
                Refund Policy
              </button>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-green-600/20 border border-green-500 rounded-lg px-4 py-2 text-green-400 text-sm font-medium">
            <Shield className="h-4 w-4 mr-2" />
            Get Interview Calls or Your Money Back — Guaranteed
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;