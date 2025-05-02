
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const PortfolioPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Community Forum Platform",
      description: "A full-stack web application built to connect local communities and facilitate resource sharing.",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      link: "#community-forum"
    },
    {
      id: 2,
      title: "Debate Tournament Management System",
      description: "An automated system for organizing and running debate tournaments with real-time scoring and feedback.",
      technologies: ["Flask", "JavaScript", "SQLite", "WebSockets"],
      link: "#debate-tournament"
    },
    {
      id: 3,
      title: "Literature Archive",
      description: "Digital preservation platform for Nepali literature with searchable archives and metadata tagging.",
      technologies: ["React", "Node.js", "MongoDB", "ElasticSearch"],
      link: "#literature-archive"
    },
    {
      id: 4,
      title: "AI Writing Assistant",
      description: "NLP-based tool that helps writers improve their work through style and grammar suggestions.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      link: "#ai-writing-assistant"
    },
    {
      id: 5,
      title: "Youth Voices Platform",
      description: "A digital publication platform focused on amplifying perspectives of young people on social issues.",
      technologies: ["Next.js", "Sanity CMS", "Vercel", "Tailwind CSS"],
      link: "#youth-voices"
    }
  ];

  return (
    <section className="journal-section">
      <SectionHeading subtitle="Selected technical projects and implementations">
        Portfolio
      </SectionHeading>
      
      <div className="space-y-12 mt-8">
        {projects.map((project) => (
          <div key={project.id} className="pb-8 border-b border-border">
            <h3 className="text-xl mb-3">
              {project.link ? (
                <a href={project.link} className="no-underline hover:no-underline">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            
            <p className="mb-4 text-balance">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 text-sm">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-secondary px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
