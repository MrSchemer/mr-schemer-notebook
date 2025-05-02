
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <section className="journal-section flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl mb-4">404</h1>
      <p className="mb-8 max-w-md mx-auto text-balance">
        This page seems to have wandered off into the void. Sometimes even digital journals have missing pages.
      </p>
      <Link to="/" className="inline-flex items-center border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
        Return to journal
      </Link>
    </section>
  );
};

export default NotFoundPage;
