
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm opacity-70">
            &copy; {currentYear} Bishal Lamichhane
          </p>
        </div>
        <div className="text-sm opacity-70">
          <p>Minimalist. Curious. Evolving.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
