
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tools: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Enterprise Dashboard Redesign",
    category: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    tools: ["Figma", "Sketch", "Principle"]
  },
  {
    id: "2",
    title: "FinTech Mobile Application",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    tools: ["Figma", "Protopie", "Maze"]
  },
  {
    id: "3",
    title: "Healthcare Patient Portal",
    category: "Design System",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    tools: ["Figma", "Storybook", "Zeroheight"]
  },
  {
    id: "4",
    title: "E-Commerce UX Overhaul",
    category: "User Research",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    tools: ["Miro", "UserTesting", "Hotjar"]
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force visibility after a short delay 
    const timer = setTimeout(() => {
      const projectElements = document.querySelectorAll('.project-card');
      projectElements.forEach((el) => {
        el.classList.add('animate');
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="section-container" ref={sectionRef}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-softGray max-w-2xl mx-auto">
          A selection of my most impactful work spanning enterprise solutions, 
          mobile applications, and comprehensive design systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Link 
            to={`/case-study/${project.id}`} 
            key={project.id}
            className="project-card animate-on-scroll group relative overflow-hidden rounded-lg bg-secondary"
            style={{ 
              animationDelay: `${index * 150}ms`,
              opacity: 1 // Force visibility initially
            }}
          >
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity">
              <span className="text-electricBlue text-sm font-medium mb-2">{project.category}</span>
              <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool) => (
                  <span key={tool} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
