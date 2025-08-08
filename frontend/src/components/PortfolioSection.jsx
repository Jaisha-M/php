import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from './ui/button';

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: "Senior Level Resume",
      description: "Executive resume for 7+ years experience",
      url: "https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/6rsyilq6_new%20%283%29_senior%20level.pdf",
      level: "Senior",
      image: "https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/brlly7ax_Black%20and%20White%20Simple%20Minimalist%20Job%20Cover%20Letter.jpg"
    },
    {
      id: 2,
      title: "Mid-Level Resume",
      description: "Professional resume for 3-7 years experience", 
      url: "https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/efaykdmk_new%20%288%29_Mid-level.pdf",
      level: "Mid-Level",
      image: "https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/brlly7ax_Black%20and%20White%20Simple%20Minimalist%20Job%20Cover%20Letter.jpg"
    },
    {
      id: 3,
      title: "Entry Level Resume",
      description: "Fresh graduate resume for 0-3 years experience",
      url: "https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/dz0cfu8g_new%20%286%29_%20Entry-level.pdf",
      level: "Entry",
      image: "https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/brlly7ax_Black%20and%20White%20Simple%20Minimalist%20Job%20Cover%20Letter.jpg"
    },
    {
      id: 4,
      title: "Tech Professional Resume",
      description: "ATS-optimized resume for tech roles",
      url: "https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/59vks9h6_ATS-mid-level-Tech.pdf",
      level: "Tech",
      image: "https://customer-assets.emergentagent.com/job_resumepro-1/artifacts/brlly7ax_Black%20and%20White%20Simple%20Minimalist%20Job%20Cover%20Letter.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-gradient-to-br from-bruwrite-teal to-bruwrite-blue relative">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            See What Professional
            <span className="block">Resume Writing Looks Like</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real resumes we've created for real professionals. Each one landing interviews within weeks.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Portfolio Carousel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Resume Preview */}
              <div className="relative">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden aspect-[3/4]">
                  <iframe 
                    src={`${portfolioItems[currentIndex].url}#toolbar=0`}
                    className="w-full h-full"
                    title={portfolioItems[currentIndex].title}
                  />
                </div>
                <div className="absolute top-4 right-4 bg-bruwrite-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                  {portfolioItems[currentIndex].level}
                </div>
              </div>

              {/* Content */}
              <div className="text-white">
                <h3 className="text-2xl font-serif font-medium mb-4">
                  {portfolioItems[currentIndex].title}
                </h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {portfolioItems[currentIndex].description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-white/70">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>ATS-Optimized Format</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Industry-Specific Keywords</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Achievement-Focused Content</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-white text-bruwrite-blue hover:bg-white/90 transition-all duration-200"
                    onClick={() => window.open(portfolioItems[currentIndex].url, '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    View Full Resume
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-bruwrite-blue"
                    onClick={() => scrollToSection('pricing')}
                  >
                    Get One Like This
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-white text-white hover:bg-white hover:text-bruwrite-blue"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {portfolioItems.map((_, index) => (
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
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-white text-white hover:bg-white hover:text-bruwrite-blue"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;