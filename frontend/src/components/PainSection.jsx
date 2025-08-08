import React from 'react';
import { XCircle, AlertTriangle, FileX } from 'lucide-react';
import { mockData } from '../mock/mockData';

const PainSection = () => {
  const getIcon = (index) => {
    const icons = [FileX, AlertTriangle, XCircle];
    const IconComponent = icons[index];
    return <IconComponent className="h-8 w-8 text-red-500" />;
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
            Why Generic AI Resumes
            <span className="block text-red-600">Fail Every Time</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Most job seekers are sabotaging their own success without realizing it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mockData.painPoints.map((point, index) => (
            <div key={point.id} className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-center mb-6">
                {getIcon(index)}
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-4 text-center">
                {point.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-red-50 border border-red-200 rounded-lg px-6 py-4">
            <AlertTriangle className="h-5 w-5 text-red-500 mr-3" />
            <span className="text-red-700 font-medium">
              Don't let a poorly written resume cost you your dream job
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;