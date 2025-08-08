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
    <section id="process" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
            How We Work
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our proven 5-step process ensures you get a resume that not only looks professional but delivers results.
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-16 bottom-16">
            <div className="w-0.5 h-full bg-gradient-to-b from-bruwrite-blue via-bruwrite-teal to-bruwrite-blue"></div>
          </div>

          <div className="space-y-16">
            {mockData.processSteps.map((step, index) => (
              <div key={step.id} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className="lg:w-5/12">
                  <div className={`bg-white rounded-2xl p-8 shadow-lg border border-slate-100 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-bruwrite-blue/10 rounded-full flex items-center justify-center text-bruwrite-blue mr-4">
                        {getIcon(step.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-medium text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-sm text-bruwrite-blue font-medium">
                          {step.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="lg:w-2/12 flex justify-center">
                  <div className="w-16 h-16 bg-bruwrite-blue rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {step.id}
                  </div>
                </div>

                {/* Spacer */}
                <div className="lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-lg px-6 py-4">
            <Trophy className="h-5 w-5 text-green-600 mr-3" />
            <span className="text-green-700 font-medium">
              Average time to first interview: 8 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;