
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyData {
  id: string;
  title: string;
  brief: string;
  client: string;
  duration: string;
  role: string;
  challenge: string;
  solution: string;
  process: {
    title: string;
    description: string;
  }[];
  outcome: {
    title: string;
    description: string;
  }[];
  mainImage: string;
  images: string[];
}

// Sample case study data
const caseStudiesData: Record<string, CaseStudyData> = {
  "1": {
    id: "1",
    title: "Enterprise Dashboard Redesign",
    brief: "Reimagining data visualization for financial analysts",
    client: "FinTech Solutions Inc.",
    duration: "3 months",
    role: "Lead UX Designer",
    challenge: "The existing dashboard was cluttered and difficult to navigate, leading to frequent user errors and reduced productivity. Financial analysts needed to quickly access and analyze complex data sets without feeling overwhelmed by the interface.",
    solution: "I created a modular dashboard system with customizable widgets, improved data visualization components, and a streamlined navigation structure. The design prioritizes the most frequently used features while maintaining easy access to advanced functionality.",
    process: [
      {
        title: "Research & Discovery",
        description: "Conducted user interviews with 12 financial analysts, created journey maps, and analyzed pain points in the existing system. Identified key opportunities for improvement in data visualization and workflow efficiency."
      },
      {
        title: "Information Architecture",
        description: "Restructured the dashboard hierarchy based on user needs and task frequency. Created card sorting exercises to validate the new structure with users."
      },
      {
        title: "Wireframing & Prototyping",
        description: "Developed low-fidelity wireframes to explore different layout options. Created interactive prototypes to test navigation patterns and widget interactions."
      },
      {
        title: "Visual Design & UI Development",
        description: "Designed a cohesive visual system with consistent components. Created a UI kit for developers and documented design patterns."
      }
    ],
    outcome: [
      {
        title: "Efficiency Improvement",
        description: "Reduced time spent on common tasks by 45%, according to post-launch usability testing."
      },
      {
        title: "User Satisfaction",
        description: "NPS score improved from 32 to 68 after the redesign."
      },
      {
        title: "Error Reduction",
        description: "User errors decreased by 37%, resulting in more accurate financial reporting."
      }
    ],
    mainImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
    ]
  },
  "2": {
    id: "2",
    title: "FinTech Mobile Application",
    brief: "Creating an intuitive banking experience for millennials",
    client: "NextGen Banking",
    duration: "4 months",
    role: "Senior UX Designer",
    challenge: "Traditional banking apps fail to engage younger users and often create friction in basic financial tasks. Our goal was to create a mobile banking experience that feels intuitive to millennials while maintaining robust security and compliance requirements.",
    solution: "Designed a clean, focused interface with progressive disclosure of complex features. Created a personalized experience with customizable dashboards and financial insights based on user behavior and goals.",
    process: [
      {
        title: "User Research",
        description: "Conducted competitive analysis of leading banking apps. Interviewed 20 millennials about their banking habits and pain points. Created persona profiles to guide design decisions."
      },
      {
        title: "Experience Mapping",
        description: "Mapped the user journey for key banking tasks, identifying friction points and emotional reactions. Created opportunity statements for each pain point."
      },
      {
        title: "Interaction Design",
        description: "Developed gesture-based interactions to simplify common tasks. Created microinteractions to provide feedback and guidance throughout the experience."
      },
      {
        title: "Testing & Refinement",
        description: "Conducted usability testing with 15 participants. Iterated on designs based on feedback, focusing on simplifying complex banking concepts."
      }
    ],
    outcome: [
      {
        title: "User Adoption",
        description: "70% of users completed account setup within the first week of download, exceeding target by 20%."
      },
      {
        title: "Feature Engagement",
        description: "Users engaged with financial insights feature 3x more frequently than industry average."
      },
      {
        title: "Business Impact",
        description: "Contributed to 35% increase in new millennial customers in the first quarter after launch."
      }
    ],
    mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
    ]
  }
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudiesData[id] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Animation on scroll initialization
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('animate');
        }
      });
    };
    
    // Run once on mount
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      
      <main className="pt-24">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/5">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
        
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={caseStudy.mainImage} 
              alt={caseStudy.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent"></div>
          </div>
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
            <div className="animate-on-scroll">
              <span className="text-electricBlue text-sm font-medium mb-4 block">Case Study</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-white/80 max-w-3xl">{caseStudy.brief}</p>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-on-scroll">
              <h3 className="text-sm font-medium text-electricBlue mb-2">Client</h3>
              <p className="text-white">{caseStudy.client}</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '100ms' }}>
              <h3 className="text-sm font-medium text-electricBlue mb-2">Duration</h3>
              <p className="text-white">{caseStudy.duration}</p>
            </div>
            <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
              <h3 className="text-sm font-medium text-electricBlue mb-2">My Role</h3>
              <p className="text-white">{caseStudy.role}</p>
            </div>
          </div>
        </section>
        
        {/* Challenge & Solution */}
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-on-scroll">
                <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
                <p className="text-softGray">{caseStudy.challenge}</p>
              </div>
              <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
                <h2 className="text-2xl font-bold mb-6">The Solution</h2>
                <p className="text-softGray">{caseStudy.solution}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-12 animate-on-scroll">Design Process</h2>
          
          <div className="space-y-16">
            {caseStudy.process.map((step, index) => (
              <div 
                key={index} 
                className="animate-on-scroll grid md:grid-cols-5 gap-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="bg-electricBlue text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <p className="text-softGray">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Images Section */}
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 animate-on-scroll">Visual Design</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.images.map((image, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll rounded-lg overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={image} 
                    alt={`${caseStudy.title} - Design ${index + 1}`} 
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Outcomes Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-12 animate-on-scroll">Outcomes & Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.outcome.map((item, index) => (
              <div 
                key={index} 
                className="animate-on-scroll bg-secondary p-6 rounded-lg border border-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-softGray">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-on-scroll">
            <p className="text-softGray mb-6 max-w-2xl mx-auto">
              Interested in working together on your next project? 
              Let's create something amazing together.
            </p>
            <Link to="/#contact">
              <Button className="bg-electricBlue hover:bg-electricBlue/90 text-white">
                Get In Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
