
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'Ongoing' | 'Completed';
  link?: string;
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "ASSLUN Digital Archive",
      description: "Leading the technical development of a digital platform to preserve and promote Nepali literature and cultural heritage.",
      category: "Nonprofit Tech",
      status: "Ongoing",
      link: "#asslun-archive"
    },
    {
      id: 2,
      title: "Community Health Information System",
      description: "A platform connecting rural communities with health resources and enabling remote consultations with medical professionals.",
      category: "Tech for Good",
      status: "Ongoing",
      link: "#health-info-system"
    },
    {
      id: 3,
      title: "National Youth Debate Championship",
      description: "Organized and adjudicated competitive debate tournaments for high school and university students across Nepal.",
      category: "Education & Debate",
      status: "Completed",
      link: "#debate-championship"
    },
    {
      id: 4,
      title: "Leo Club Community Service Initiative",
      description: "Coordinated volunteer efforts in underprivileged communities, focusing on education and health awareness.",
      category: "Social Service",
      status: "Ongoing",
      link: "#leo-club-initiative"
    },
    {
      id: 5,
      title: "Youth Art Expression Workshop",
      description: "Created a series of workshops teaching digital art skills to young people as a form of self-expression and potential livelihood.",
      category: "Art & Education",
      status: "Completed",
      link: "#art-workshop"
    }
  ];

  return (
    <section className="journal-section">
      <SectionHeading subtitle="Social service, debate, tech-for-good, and youth initiatives">
        Projects
      </SectionHeading>
      
      <div className="space-y-12 mt-8">
        {projects.map((project) => (
          <div key={project.id} className="pb-8 border-b border-border">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">{project.category}</span>
              <span className={`text-xs px-2 py-1 rounded ${
                project.status === 'Ongoing' 
                  ? 'bg-secondary text-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {project.status}
              </span>
            </div>
            
            <h3 className="text-xl mb-3">
              {project.link ? (
                <a href={project.link} className="no-underline hover:no-underline">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            
            <p className="text-balance">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
