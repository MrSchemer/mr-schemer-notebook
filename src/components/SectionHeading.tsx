
import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, subtitle }) => {
  return (
    <div className="mb-8 md:mb-12">
      <h2 className="mb-2">{children}</h2>
      {subtitle && (
        <p className="text-sm md:text-base opacity-70">{subtitle}</p>
      )}
      <div className="w-16 h-px bg-black mt-4"></div>
    </div>
  );
};

export default SectionHeading;
