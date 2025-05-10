
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white font-inter font-semibold text-lg">
              Viraj Zaveri<span className="text-electricBlue">.</span>
            </p>
            <p className="text-softGray text-sm mt-1">Senior UX Designer</p>
            <p className="text-softGray text-sm">Surat, India</p>
          </div>
          
          <div className="text-softGray text-sm">
            <p>© {currentYear} Viraj Zaveri. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
