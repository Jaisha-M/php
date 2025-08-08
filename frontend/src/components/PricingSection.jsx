import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { mockData } from '../mock/mockData';

const PricingSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-bruwrite-blue to-bruwrite-teal relative">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            Choose Your
            <span className="block">Career Transformation</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Honest pricing. Real results. Pick the package that fits where you are in your career journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {mockData.pricingPlans.map((plan) => (
            <Card key={plan.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              plan.isPopular 
                ? 'border-white border-2 scale-105 lg:scale-110 bg-white/20' 
                : 'border-white/30 hover:border-white/50 bg-white/10'
            } backdrop-blur-sm`}>
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-white text-bruwrite-blue text-center py-2 text-sm font-medium">
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular Choice
                </div>
              )}

              <div className={`p-6 ${plan.isPopular ? 'pt-12' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-medium text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-white/70 mb-4">
                    {plan.experienceLevel}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-white/70 ml-2">
                      {plan.currency}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 text-base font-medium transition-all duration-200 transform hover:scale-105 group ${
                    plan.isPopular
                      ? 'bg-white text-bruwrite-blue hover:bg-white/90'
                      : 'bg-white/20 hover:bg-white hover:text-bruwrite-blue text-white border border-white/30'
                  }`}
                  onClick={() => scrollToSection('contact')}
                >
                  Start with {plan.name}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Guarantee */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-serif font-medium text-white mb-4">
            Our No-BS Guarantee
          </h3>
          <p className="text-lg text-white/90 mb-4">
            No interview calls within 30 days? We'll rewrite it for free or give you every penny back.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-6 text-sm text-white/80">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>100% Satisfaction Promise</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>30-Day Money-Back</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-400" />
              <span>Free Do-Overs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;