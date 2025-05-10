
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-charcoal">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,195,240,0.15),transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Senior UX Designer crafting<br />
            <span className="text-electricBlue">scalable systems</span> for complex products.
          </h1>
          
          <p className="text-lg sm:text-xl text-softGray max-w-2xl mx-auto mb-10">
            Transforming complex challenges into intuitive digital experiences 
            that drive user engagement and business growth.
          </p>
          
          <button 
            className="bg-electricBlue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all"
            onClick={scrollToProjects}
          >
            View My Work
          </button>
        </div>
      </div>
      
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToProjects}
      >
        <ArrowDown className="text-electricBlue" size={32} />
      </div>
    </section>
  );
};

export default Hero;
