
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Animation on scroll initialization
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Trigger animation when element is 80% into the viewport
        if (elementTop < windowHeight * 0.8) {
          element.classList.add('animate');
        }
      });
    };
    
    // Run once on mount with a delay to ensure DOM is fully rendered
    setTimeout(() => {
      animateOnScroll();
      console.log('Initial animation check completed');
    }, 300);
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <Hero />
      <Projects />
      <CaseStudies />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
