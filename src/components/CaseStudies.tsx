
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  brief: string;
  challenge: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Enterprise Dashboard Redesign",
    brief: "Reimagining data visualization for financial analysts",
    challenge: "Simplifying complex data visualization while maintaining depth of functionality for power users.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    title: "FinTech Mobile Application",
    brief: "Creating an intuitive banking experience for millennials",
    challenge: "Balancing security requirements with a frictionless user experience for daily banking tasks.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
  }
];

const CaseStudies = () => {
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

    const elements = document.querySelectorAll('.case-study');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="case-studies" className="bg-secondary py-24">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-softGray max-w-2xl mx-auto">
            Deep dives into selected projects, showcasing my design process, 
            problem-solving approach, and measurable outcomes.
          </p>
        </div>

        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className="case-study animate-on-scroll grid md:grid-cols-2 gap-8 items-center"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div>
                <span className="text-electricBlue text-sm font-medium mb-4 block">Case Study {index + 1}</span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{study.title}</h3>
                <p className="text-lg text-white/90 mb-3">{study.brief}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                  <p className="text-softGray">{study.challenge}</p>
                </div>
                
                <Link to={`/case-study/${study.id}`}>
                  <Button variant="outline" className="border-electricBlue text-electricBlue hover:bg-electricBlue/10">
                    Read Case Study
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
