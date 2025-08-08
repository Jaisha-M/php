import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { mockData } from '../mock/mockData';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = mockData.testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            Real Clients,
            <span className="block text-bruwrite-teal">Real Interviews</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Don't take our word for it. Here's what professionals say about their Bruwrite experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
            <Quote className="h-10 w-10 text-bruwrite-blue mb-6" />
            
            <blockquote className="text-xl lg:text-2xl text-slate-700 font-light leading-relaxed mb-8">
              "{currentTestimonial.review}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-bruwrite-blue rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {currentTestimonial.initial}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-slate-600">
                    {currentTestimonial.jobTitle}
                  </p>
                  <p className="text-sm text-slate-500">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-green-600 font-medium">
                  {currentTestimonial.result}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border-white text-white hover:bg-white hover:text-slate-900"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-bruwrite-teal scale-125' 
                      : 'bg-slate-400 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="w-12 h-12 rounded-full border-white text-white hover:bg-white hover:text-slate-900"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          <div>
            <div className="text-4xl font-bold text-bruwrite-teal mb-2">80%+</div>
            <p className="text-slate-300">Get interviews within 2 weeks</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-bruwrite-teal mb-2">500+</div>
            <p className="text-slate-300">Successful career transitions</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-bruwrite-teal mb-2">48hrs</div>
            <p className="text-slate-300">Average delivery time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;