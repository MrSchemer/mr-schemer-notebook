
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

interface Publication {
  id: number;
  title: string;
  description: string;
  type: string;
  date: string;
  link?: string;
}

const PublicationsPage: React.FC = () => {
  const publications: Publication[] = [
    {
      id: 1,
      title: "Modern Web Development with React and Django",
      description: "A comprehensive guide to building full-stack applications with React frontend and Django backend.",
      type: "Technical Book",
      date: "2024",
      link: "#web-development-book"
    },
    {
      id: 2,
      title: "Effective Communication in Technical Teams",
      description: "Research paper exploring communication strategies in multi-disciplinary technical environments.",
      type: "Academic Paper",
      date: "2023",
      link: "#technical-communication"
    },
    {
      id: 3,
      title: "Youth Activism in Digital Spaces",
      description: "Study on how young people use technology to create social movements and impact.",
      type: "Research Publication",
      date: "2023",
      link: "#youth-activism"
    },
    {
      id: 4,
      title: "Debate Handbook for Beginners",
      description: "A guide to parliamentary debate styles, argument construction, and effective speaking.",
      type: "Educational Resource",
      date: "2022",
      link: "#debate-handbook"
    },
    {
      id: 5,
      title: "Ethics in Artificial Intelligence Development",
      description: "Collection of essays examining ethical considerations for developers building AI systems.",
      type: "Essay Collection",
      date: "2022",
      link: "#ai-ethics"
    }
  ];

  return (
    <section className="journal-section">
      <SectionHeading subtitle="Books, papers, and educational resources">
        Publications
      </SectionHeading>
      
      <div className="space-y-12 mt-8">
        {publications.map((publication) => (
          <div key={publication.id} className="pb-8 border-b border-border">
            <div className="text-sm text-muted-foreground mb-2 flex items-center space-x-2">
              <span>{publication.date}</span>
              <span>•</span>
              <span>{publication.type}</span>
            </div>
            
            <h3 className="text-xl mb-3">
              {publication.link ? (
                <a href={publication.link} className="no-underline hover:no-underline">
                  {publication.title}
                </a>
              ) : (
                publication.title
              )}
            </h3>
            
            <p className="text-balance">{publication.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PublicationsPage;
