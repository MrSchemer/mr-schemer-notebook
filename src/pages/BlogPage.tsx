
import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "On Digital Minimalism",
      excerpt: "Exploring the philosophy of intentional technology use in an increasingly noisy digital landscape.",
      date: "April 12, 2025",
      slug: "digital-minimalism",
      category: "Philosophy"
    },
    {
      id: 2,
      title: "Building Sustainable Web Applications",
      excerpt: "Reflections on creating software that's not just efficient but environmentally conscious.",
      date: "March 28, 2025",
      slug: "sustainable-web-applications",
      category: "Technology"
    },
    {
      id: 3,
      title: "The Art of Thoughtful Dialogue",
      excerpt: "Lessons from competitive debate that apply to everyday communication and conflict resolution.",
      date: "March 15, 2025",
      slug: "art-of-dialogue",
      category: "Communication"
    },
    {
      id: 4,
      title: "AI Ethics: Beyond the Buzzwords",
      excerpt: "A critical examination of what ethical AI development actually requires of us as creators.",
      date: "February 27, 2025",
      slug: "ai-ethics-beyond-buzzwords",
      category: "Technology"
    },
    {
      id: 5,
      title: "Community-Driven Development",
      excerpt: "How involving communities from the start leads to more impactful and sustainable technology.",
      date: "February 10, 2025",
      slug: "community-driven-development",
      category: "Social Impact"
    }
  ];

  return (
    <section className="journal-section">
      <SectionHeading subtitle="Thoughts, reflections, and technical notes">
        Blog
      </SectionHeading>
      
      <div className="space-y-12 mt-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="pb-8 border-b border-border">
            <div className="text-sm text-muted-foreground mb-2 flex items-center space-x-2">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
            
            <h3 className="text-xl md:text-2xl mb-3">
              <Link to={`/blog/${post.slug}`} className="no-underline hover:no-underline">
                {post.title}
              </Link>
            </h3>
            
            <p className="text-balance opacity-80 mb-4">{post.excerpt}</p>
            
            <Link to={`/blog/${post.slug}`} className="text-sm">
              Continue reading
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
