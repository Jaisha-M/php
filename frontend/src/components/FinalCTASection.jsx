import React from 'react';
import { ArrowRight, Clock, Shield, Trophy } from 'lucide-react';
import { Button } from './ui/button';

const FinalCTASection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-bruwrite-blue to-bruwrite-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-serif font-light text-white mb-6">
            Your Next Role
            <span className="block font-normal">is Waiting</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Stop letting generic resumes hold you back. Join hundreds of professionals who've transformed their careers with Bruwrite.
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center flex-wrap gap-8 mb-12 text-white/80">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span className="font-medium">2-4 Day Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Interview Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5" />
              <span className="font-medium">80%+ Success Rate</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="bg-white text-bruwrite-blue hover:bg-white/90 px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 group shadow-xl"
            >
              Book My Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('testimonials')}
              className="border-white text-white hover:bg-white hover:text-bruwrite-blue px-8 py-4 text-lg font-medium transition-all duration-200"
            >
              Read More Reviews
            </Button>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-serif font-medium text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-6">
              Schedule your consultation call today and take the first step toward landing your dream job.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-white/80 text-sm">
              <div>📧 hello@bruwrite.com</div>
              <div>📞 Available 9 AM - 6 PM GMT</div>
              <div>🌍 Serving professionals globally</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;