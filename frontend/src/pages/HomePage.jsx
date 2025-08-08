import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PainSection from '../components/PainSection';
import PortfolioSection from '../components/PortfolioSection';
import SolutionSection from '../components/SolutionSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bruwrite-blue to-bruwrite-teal">
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <PortfolioSection />
        <SolutionSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;