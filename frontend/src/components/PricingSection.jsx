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
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
            Choose Your
            <span className="block text-bruwrite-blue">Resume Upgrade</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Transparent pricing. No hidden fees. Choose the package that matches your career level.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mockData.pricingPlans.map((plan) => (
            <Card key={plan.id} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
              plan.isPopular 
                ? 'border-bruwrite-blue border-2 scale-105 lg:scale-110' 
                : 'border-slate-200 hover:border-bruwrite-blue'
            }`}>
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-bruwrite-blue text-white text-center py-2 text-sm font-medium">
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.isPopular ? 'pt-14' : ''}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-serif font-medium text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    {plan.experienceLevel}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900">
                      ${plan.price}
                    </span>
                    <span className="text-slate-600 ml-2">
                      {plan.currency}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 text-base font-medium transition-all duration-200 transform hover:scale-105 group ${
                    plan.isPopular
                      ? 'bg-bruwrite-blue hover:bg-bruwrite-blue/90 text-white'
                      : 'bg-slate-100 hover:bg-bruwrite-blue hover:text-white text-slate-700'
                  }`}
                  onClick={() => scrollToSection('contact')}
                >
                  Get Started with {plan.name}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Guarantee */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">
            Our Iron-Clad Guarantee
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            If you don't receive interview calls within 30 days of delivery, we'll rewrite your resume for free or provide a full refund.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>30-Day Money-Back Policy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Free Rewrites if Needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;