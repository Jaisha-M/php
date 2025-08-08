import React from 'react';
import { XCircle, AlertTriangle, FileX } from 'lucide-react';
import { mockData } from '../mock/mockData';

const PainSection = () => {
  const getIcon = (index) => {
    const icons = [FileX, AlertTriangle, XCircle];
    const IconComponent = icons[index];
    return <IconComponent className="h-8 w-8 text-red-300" />;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-bruwrite-blue to-bruwrite-teal relative">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            Here's the brutal truth about
            <span className="block text-red-300">job hunting today</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Most people don't even know their resume is the problem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mockData.painPoints.map((point, index) => (
            <div key={point.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-4">
                {getIcon(index)}
              </div>
              <h3 className="text-lg font-serif font-medium text-white mb-3 text-center">
                {point.title}
              </h3>
              <p className="text-white/80 text-center text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-red-500/20 border border-red-300 rounded-lg px-6 py-3">
            <AlertTriangle className="h-5 w-5 text-red-300 mr-3" />
            <span className="text-red-200 font-medium">
              Your dream job is slipping away while you wait
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;