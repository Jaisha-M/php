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
    return <IconComponent className="h-12 w-12 text-bruwrite-blue" />;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
            Your Career,
            <span className="block text-bruwrite-blue">Professionally Told</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We don't just write resumes. We craft career narratives that compel hiring managers to pick up the phone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mockData.solutions.map((solution, index) => (
            <div key={solution.id} className="group">
              <div className="bg-slate-50 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-bruwrite-blue hover:text-white hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-3 rounded-full bg-white group-hover:bg-white/10 transition-all duration-300">
                    {getIcon(solution.icon)}
                  </div>
                </div>
                <h3 className="text-xl font-serif font-medium text-slate-900 group-hover:text-white mb-4 text-center transition-colors">
                  {solution.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 text-center leading-relaxed transition-colors">
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
            className="bg-bruwrite-blue hover:bg-bruwrite-blue/90 text-white px-8 py-4 text-lg font-medium transition-all duration-200 transform hover:scale-105 group"
          >
            See How It Works
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;