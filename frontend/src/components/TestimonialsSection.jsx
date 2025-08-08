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
    }, 8000);

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
    <section id="testimonials" className="py-16 bg-gradient-to-br from-bruwrite-teal to-bruwrite-blue relative">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            Real People,
            <span className="block text-white">Real Results</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what happens when we rewrite your story.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/20">
            <Quote className="h-8 w-8 text-white/60 mb-6" />
            
            <blockquote className="text-xl lg:text-2xl text-white font-light leading-relaxed mb-8">
              "{currentTestimonial.review}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-bruwrite-blue text-lg font-bold">
                  {currentTestimonial.initial}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-white/70">
                    {currentTestimonial.jobTitle}
                  </p>
                  <p className="text-sm text-white/60">
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
                <p className="text-sm text-green-300 font-medium">
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
              className="w-10 h-10 rounded-full border-white text-white hover:bg-white hover:text-bruwrite-blue"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              className="w-10 h-10 rounded-full border-white text-white hover:bg-white hover:text-bruwrite-blue"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">80%+</div>
            <p className="text-white/70">Interview calls within 2 weeks</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <p className="text-white/70">Career transformations</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">48hrs</div>
            <p className="text-white/70">Average turnaround time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;