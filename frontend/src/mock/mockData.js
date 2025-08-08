export const mockData = {
  testimonials: [
    {
      id: 1,
      name: "Rajesh Kumar",
      initial: "R.K.",
      jobTitle: "Supply Chain Manager",
      company: "Mahindra Group",
      review: "Bruwrite transformed my outdated resume into a powerful document that landed me 3 interviews in the first week. The ATS optimization was game-changing.",
      rating: 5,
      result: "Landed Senior Manager role with 40% salary increase"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      initial: "S.M.",
      jobTitle: "Business Analyst",
      company: "NESR Energy Services",
      review: "Professional, detailed, and results-driven. My new resume perfectly captured my achievements and opened doors I never thought possible.",
      rating: 5,
      result: "3 job offers within 2 weeks"
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      initial: "A.H.",
      jobTitle: "Coiling Tube Senior Supervisor",
      company: "Energy Sector",
      review: "The consultation call was incredibly insightful. They understood my industry and crafted a resume that truly represented my expertise.",
      rating: 5,
      result: "Promoted to Operations Manager"
    },
    {
      id: 4,
      name: "Priya Sharma",
      initial: "P.S.",
      jobTitle: "Business Advisor",
      company: "Centryply",
      review: "Exceptional service! The unlimited revisions feature ensured my resume was perfect. Worth every penny for the results it delivered.",
      rating: 5,
      result: "Senior Consultant role at Fortune 500 company"
    }
  ],
  
  processSteps: [
    {
      id: 1,
      title: "Consultation Call",
      description: "30-minute deep-dive into your career goals, achievements, and target roles.",
      icon: "phone",
      duration: "30 min"
    },
    {
      id: 2,
      title: "Expert Crafting",
      description: "Professional writer creates your ATS-optimized resume with industry-specific keywords.",
      icon: "edit",
      duration: "1-2 days"
    },
    {
      id: 3,
      title: "Review & Revise",
      description: "Collaborate with us to perfect every detail with unlimited revisions for 7 days.",
      icon: "refresh",
      duration: "Up to 7 days"
    },
    {
      id: 4,
      title: "Final Delivery",
      description: "Receive your polished resume in multiple formats, ready to land interviews.",
      icon: "download",
      duration: "Same day"
    },
    {
      id: 5,
      title: "Interview Success",
      description: "Apply with confidence knowing your resume will get past ATS systems.",
      icon: "trophy",
      duration: "Ongoing"
    }
  ],

  pricingPlans: [
    {
      id: 1,
      name: "Basic",
      experienceLevel: "0–3 years (Entry-level)",
      price: 19,
      currency: "USD",
      isPopular: false,
      features: [
        "One ATS-optimised Resume",
        "Call with Resume Writer", 
        "Unlimited Revisions (7 days)",
        "80%+ ATS Score Guarantee",
        "Delivery in 2–4 days"
      ]
    },
    {
      id: 2,
      name: "Premium",
      experienceLevel: "3–7 years (Mid-level)",
      price: 29,
      currency: "USD",
      isPopular: true,
      features: [
        "One ATS-optimised Resume",
        "Call with Resume Writer",
        "Unlimited Revisions (7 days)", 
        "80%+ ATS Score Guarantee",
        "Delivery in 2–4 days",
        "LinkedIn Profile Optimization Tips"
      ]
    },
    {
      id: 3,
      name: "Executive",
      experienceLevel: "7+ years (Senior level)",
      price: 35,
      currency: "USD", 
      isPopular: false,
      features: [
        "One ATS-optimised Resume",
        "Call with Resume Writer",
        "Unlimited Revisions (7 days)",
        "80%+ ATS Score Guarantee", 
        "Delivery in 2–4 days",
        "Executive Summary Enhancement",
        "Industry-Specific Keywords"
      ]
    }
  ],

  painPoints: [
    {
      id: 1,
      title: "Generic AI Templates Kill Your Chances",
      description: "Recruiters can spot AI-generated resumes instantly. They lack personality and fail to showcase your unique value."
    },
    {
      id: 2,
      title: "ATS Systems Reject 75% of Resumes",
      description: "Most resumes never reach human eyes because they're not optimized for Applicant Tracking Systems."
    },
    {
      id: 3,
      title: "Your Experience Gets Lost in Translation", 
      description: "Technical jargon and poor formatting hide your achievements from recruiters who spend just 6 seconds scanning."
    }
  ],

  solutions: [
    {
      id: 1,
      title: "Human Expertise Meets ATS Technology",
      description: "Our certified writers understand both human psychology and ATS algorithms, creating resumes that perform on both fronts.",
      icon: "users"
    },
    {
      id: 2,
      title: "Industry-Specific Keyword Optimization",
      description: "We research your target roles and industries to include the exact keywords that get you noticed by the right people.",
      icon: "search" 
    },
    {
      id: 3,
      title: "Proven Track Record of Success",
      description: "80%+ of our clients receive interview calls within 2 weeks. Your success is our reputation.",
      icon: "target"
    }
  ]
};