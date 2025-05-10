
import React, { useRef, useEffect } from 'react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Jane's approach to UX challenges combines analytical thinking with creative problem-solving. Her work on our enterprise dashboard dramatically improved user efficiency and satisfaction metrics.",
    author: "Alex Johnson",
    position: "Product Director",
    company: "FinTech Solutions Inc."
  },
  {
    id: "2",
    quote: "Working with Jane transformed our product. She has a unique ability to balance business goals with user needs, creating designs that are both beautiful and highly functional.",
    author: "Sarah Chen",
    position: "CEO",
    company: "HealthTech Startup"
  },
  {
    id: "3",
    quote: "Jane's leadership in designing our design system has created consistency across our product suite and significantly accelerated our development cycles.",
    author: "Michael Rodriguez",
    position: "Lead Developer",
    company: "Enterprise Solutions"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.testimonial-card');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="section-container" ref={sectionRef}>
      <div className="mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">What People Say</h2>
        <p className="text-softGray max-w-2xl mx-auto">
          Feedback from clients and collaborators on my design process and outcomes.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className="testimonial-card animate-on-scroll bg-secondary rounded-lg p-8 border border-white/10 hover:border-electricBlue/30 transition-colors"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="mb-6">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.667 13.333H5.33366C5.33366 8 9.33366 5.33301 13.3337 5.33301C13.3337 9.33301 11.6451 10.6663 10.667 13.333Z" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.0003 13.333H18.667C18.667 8 22.667 5.33301 26.667 5.33301C26.667 9.33301 24.9784 10.6663 24.0003 13.333Z" stroke="#33C3F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <p className="mb-6 text-white/90">{testimonial.quote}</p>
            
            <div>
              <p className="font-semibold text-white">{testimonial.author}</p>
              <p className="text-softGray text-sm">
                {testimonial.position}, {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
