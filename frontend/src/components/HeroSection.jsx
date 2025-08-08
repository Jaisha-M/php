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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-bruwrite-blue to-bruwrite-teal pt-16">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 text-sm text-white/80 mb-6">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>ATS-Optimized</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span>Interview Guarantee</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-white leading-tight">
              Land Your Dream Job With a
              <span className="block text-white font-normal">
                Resume That Actually Works
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              Stop getting rejected by robots. Our human writers craft resumes that beat ATS systems AND impress hiring managers. No templates. No AI. Just results.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-bruwrite-blue hover:bg-white/90 px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 group shadow-xl"
            >
              Get My Resume Rewritten
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="border-white text-white hover:bg-white hover:text-bruwrite-blue px-8 py-4 text-lg font-medium transition-all duration-200"
            >
              See Our Work
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-12 space-y-3">
            <p className="text-white/70 text-sm font-medium">
              Trusted by professionals at
            </p>
            <div className="flex items-center justify-center flex-wrap gap-8 text-white/80">
              <span className="text-lg font-medium">Mahindra</span>
              <span className="text-lg font-medium">NESR Energy</span>
              <span className="text-lg font-medium">Centryply</span>
              <span className="text-lg font-medium">Amirthanjan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;