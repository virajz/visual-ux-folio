
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-softGray max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          I'd love to hear from you.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-secondary border-white/10 focus:border-electricBlue text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="bg-secondary border-white/10 focus:border-electricBlue text-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                required
                rows={5}
                className="bg-secondary border-white/10 focus:border-electricBlue text-white"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-electricBlue hover:bg-electricBlue/90 text-white w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        
        <div className="bg-secondary rounded-lg p-8 border border-white/10 h-fit">
          <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-white font-medium mb-2">Email</p>
              <a 
                href="mailto:jane.doe@example.com" 
                className="text-electricBlue hover:underline flex items-center"
              >
                jane.doe@example.com
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
            
            <div>
              <p className="text-white font-medium mb-2">Location</p>
              <p className="text-softGray">San Francisco, CA (Open to Remote)</p>
            </div>
            
            <div>
              <p className="text-white font-medium mb-4">Social Profiles</p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-electricBlue/20 p-3 rounded-full transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-electricBlue/20 p-3 rounded-full transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
