
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
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

    const elements = document.querySelectorAll('.about-content');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="bg-secondary py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-content animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
            
            <p className="text-softGray mb-6">
              I'm a Senior UX Designer with 8+ years of experience crafting digital products that 
              balance business objectives with user needs. My approach combines strategic thinking, 
              user-centered design methodologies, and a touch of creative flair.
            </p>
            
            <p className="text-softGray mb-6">
              My expertise includes design systems, complex enterprise applications, mobile experiences, 
              and leading cross-functional teams through the design process. I thrive in collaborative 
              environments where I can translate complex problems into elegant, intuitive solutions.
            </p>
            
            <p className="text-softGray mb-8">
              When I'm not designing, you'll find me exploring hiking trails, experimenting with 
              photography, or diving into the latest design trends and technologies.
            </p>
            
            <Button variant="outline" className="border-electricBlue text-electricBlue hover:bg-electricBlue/10">
              <Download size={16} className="mr-2" />
              Download Resume
            </Button>
          </div>
          
          <div className="about-content animate-on-scroll" style={{ animationDelay: '200ms' }}>
            <div className="bg-charcoal rounded-lg p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-white">Skills & Expertise</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Design</h4>
                  <div className="flex flex-wrap gap-2">
                    {["UX Design", "UI Design", "Interaction Design", "Design Systems", "Information Architecture", "Wireframing", "Prototyping"].map((skill) => (
                      <span key={skill} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Research</h4>
                  <div className="flex flex-wrap gap-2">
                    {["User Research", "Usability Testing", "User Interviews", "A/B Testing", "Analytics"].map((skill) => (
                      <span key={skill} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Figma", "Sketch", "Adobe XD", "Principle", "Framer", "Miro", "Zeroheight"].map((skill) => (
                      <span key={skill} className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
