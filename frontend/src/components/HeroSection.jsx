import React from 'react';
import { Button } from './ui/button';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-sm text-slate-600 mb-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>ATS-Optimized</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Interview Guarantee</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-slate-900 leading-tight">
              Resumes That Get You
              <span className="block text-bruwrite-blue font-normal">
                Interview Calls — Every Time
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Human-crafted. ATS-optimized. Proven to land mid-to-senior roles globally.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="bg-bruwrite-blue hover:bg-bruwrite-blue/90 text-white px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 group"
            >
              Get My Resume Upgrade
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('testimonials')}
              className="border-bruwrite-blue text-bruwrite-blue hover:bg-bruwrite-blue hover:text-white px-8 py-4 text-lg font-medium transition-all duration-200"
            >
              See Success Stories
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-16 space-y-4">
            <p className="text-slate-500 text-sm font-medium">
              Trusted by professionals at
            </p>
            <div className="flex items-center justify-center flex-wrap gap-8 text-slate-400">
              <span className="text-lg font-medium">Mahindra</span>
              <span className="text-lg font-medium">NESR Energy</span>
              <span className="text-lg font-medium">Centryply</span>
              <span className="text-lg font-medium">Amirthanjan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-bruwrite-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-bruwrite-blue/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;