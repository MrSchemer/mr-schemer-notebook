
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll respond shortly.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="border-muted"
          />
        </div>
        
        <div>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="border-muted"
          />
        </div>

        <div>
          <Input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="border-muted"
          />
        </div>
        
        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
            className="min-h-[150px] border-muted"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-black text-white hover:bg-black/80"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
