
import React from 'react';
import TypewriterEffect from '@/components/TypewriterEffect';

const HomePage: React.FC = () => {
  const quote = "In the silence of thought, I find the echoes of progress.";
  
  return (
    <section className="journal-section flex flex-col justify-center min-h-[80vh]">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6">
          <TypewriterEffect text={quote} />
        </h1>
        <p className="text-sm md:text-base opacity-70 mt-8">
          Bishal Lamichhane — Creator, Coder, Community Builder
        </p>
      </div>
    </section>
  );
};

export default HomePage;
