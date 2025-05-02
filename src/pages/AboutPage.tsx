
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const AboutPage: React.FC = () => {
  return (
    <section className="journal-section">
      <SectionHeading subtitle="The person behind the screen">
        About
      </SectionHeading>
      
      <div className="prose prose-sm md:prose-base max-w-none space-y-6">
        <p className="text-balance">
          I'm Bishal Lamichhane, widely known as Mr. Schemer — a Nepali creator, coder, 
          community builder, and communicator currently on a gap year to explore the frontiers 
          of technology and social impact.
        </p>

        <h3 className="mt-8 mb-4">My Journey</h3>
        <p>
          My path has been guided by curiosity and a desire to bridge technology with human needs. 
          Having grown up in Nepal, I've witnessed both the challenges that communities face and the 
          transformative potential of thoughtful innovation. This perspective drives my approach to 
          coding and community work—seeing them not as separate endeavors but as complementary tools 
          for meaningful change.
        </p>

        <h3 className="mt-8 mb-4">Philosophy</h3>
        <p>
          I believe in minimalism—not just aesthetically, but as a mode of thinking and creating. 
          Simplicity brings clarity. In code, this translates to clean, readable solutions. In life, 
          it means focusing on what truly matters and discarding the noise. I strive to build 
          technology that doesn't merely exist to be impressive, but to be genuinely useful and 
          accessible.
        </p>

        <blockquote>
          Technology should feel like a natural extension of human capability, not an intrusion 
          into human experience.
        </blockquote>

        <h3 className="mt-8 mb-4">Gap Year Explorations</h3>
        <p>
          This pause from traditional academic paths allows me to learn through doing—building 
          projects that matter, collaborating with diverse minds, and understanding the nuanced 
          ways technology can serve communities. I'm currently focused on:
        </p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>Developing AI applications that augment human creativity</li>
          <li>Building platforms that amplify youth voices</li>
          <li>Exploring the intersection of technology and social good</li>
          <li>Writing and reflecting on the ethical dimensions of tech</li>
        </ul>

        <h3 className="mt-8 mb-4">Affiliations</h3>
        <p>
          I'm proud to work with organizations that align with my values:
        </p>
        
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>ASSLUN:</strong> Leading technical development for this nonprofit focused on literature and social work</li>
          <li><strong>Debate Network Nepal:</strong> Contributing as a remote developer</li>
          <li><strong>Leo Club:</strong> Serving as Public Relations Officer</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
