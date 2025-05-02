
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { Mail, MessageCircle, FileText } from 'lucide-react';

interface ContactMethod {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

const ContactPage: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      icon: <Mail size={18} />,
      title: "Email",
      value: "bishal@mrschemer.com",
      link: "mailto:bishal@mrschemer.com"
    },
    {
      icon: <MessageCircle size={18} />,
      title: "Twitter",
      value: "@mr_schemer",
      link: "https://twitter.com/mr_schemer"
    },
    {
      icon: <FileText size={18} />,
      title: "LinkedIn",
      value: "Bishal Lamichhane",
      link: "https://linkedin.com/in/bishal-lamichhane"
    }
  ];

  return (
    <section className="journal-section">
      <SectionHeading subtitle="Get in touch for collaborations, questions, or just to say hello">
        Contact
      </SectionHeading>
      
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <p className="mb-8 text-balance">
            I'm always interested in meaningful conversations and collaborations. 
            Whether you have a project in mind, a question about my work, 
            or simply want to connect, feel free to reach out through any of the channels below.
          </p>
          
          <div className="space-y-6 mb-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-sm opacity-70">{method.title}</h4>
                  {method.link ? (
                    <a href={method.link} className="text-base">
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-base">{method.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-sm opacity-70">
            I typically respond within 48 hours.
          </p>
        </div>
        
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
