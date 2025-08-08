import React from 'react';
import { Users, Search, Target, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock/mockData';

const SolutionSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      users: Users,
      search: Search,
      target: Target
    };
    const IconComponent = icons[iconName];
    return <IconComponent className="h-12 w-12 text-white" />;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-bruwrite-teal to-bruwrite-blue relative">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            Why We're Different From
            <span className="block">Every Other Resume Service</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We don't just reformat your resume. We completely reimagine how your story gets told.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {mockData.solutions.map((solution, index) => (
            <div key={solution.id} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full transition-all duration-300 hover:bg-white/20 hover:shadow-xl hover:-translate-y-1 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-white/10">
                    {getIcon(solution.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-medium text-white mb-4 text-center">
                  {solution.title}
                </h3>
                <p className="text-white/80 text-center leading-relaxed text-sm">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('process')}
            className="bg-white text-bruwrite-blue hover:bg-white/90 px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 group"
          >
            See How We Do It
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;