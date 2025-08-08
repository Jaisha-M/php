import React from 'react';
import { Phone, Edit3, RefreshCw, Download, Trophy } from 'lucide-react';
import { mockData } from '../mock/mockData';

const ProcessSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      phone: Phone,
      edit: Edit3,
      refresh: RefreshCw,
      download: Download,
      trophy: Trophy
    };
    const IconComponent = icons[iconName];
    return <IconComponent className="h-8 w-8" />;
  };

  return (
    <section id="process" className="py-16 bg-gradient-to-br from-bruwrite-blue to-bruwrite-teal relative">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            How We Transform Your Career Story
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our proven 5-step process turns your work history into interview gold.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline - Hidden connector line on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-12 bottom-12">
            <div className="w-0.5 h-full bg-gradient-to-b from-white via-white/50 to-white opacity-30"></div>
          </div>

          <div className="space-y-12">
            {mockData.processSteps.map((step, index) => (
              <div key={step.id} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className="lg:w-5/12">
                  <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mr-4">
                        {getIcon(step.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-medium text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm text-white/70 font-medium">
                          {step.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="lg:w-2/12 flex justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-bruwrite-blue text-xl font-bold shadow-lg">
                    {step.id}
                  </div>
                </div>

                {/* Spacer */}
                <div className="lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-green-500/20 border border-green-300 rounded-lg px-6 py-3">
            <Trophy className="h-5 w-5 text-green-300 mr-3" />
            <span className="text-green-200 font-medium">
              Most clients get their first interview call within 8 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;