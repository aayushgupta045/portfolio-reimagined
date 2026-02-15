import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, Mail, Github, Linkedin, Gitlab } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-header", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".contact-form", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, delay: 0.2,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".contact-socials", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, delay: 0.4,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleButtonHover = (scale: number) => {
    gsap.to(buttonRef.current, { scale, duration: 0.2 });
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="contact-header text-center mb-16" style={{ opacity: 0 }}>
          <span className="section-heading">💬 Have questions or ideas? Let's talk! 🚀</span>
          <h2 className="section-title mt-2">Get in Touch – Let's Connect</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="contact-form space-y-6" style={{ opacity: 0 }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="contact-input" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="contact-input" required />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Your Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} className="contact-input resize-none" required />
            </div>
            <button
              ref={buttonRef}
              type="submit"
              className="hero-button w-full flex items-center justify-center gap-2"
              onMouseEnter={() => handleButtonHover(1.02)}
              onMouseLeave={() => handleButtonHover(1)}
              onMouseDown={() => handleButtonHover(0.98)}
              onMouseUp={() => handleButtonHover(1.02)}
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          <div className="contact-socials mt-12 flex justify-center gap-6" style={{ opacity: 0 }}>
            <a href="mailto:contact@aayushgupta.dev" className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"><Mail size={24} /></a>
            <a href="https://github.com/AayushGupta69" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"><Github size={24} /></a>
            <a href="https://linkedin.com/in/aayushgupta69" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"><Linkedin size={24} /></a>
            <a href="https://gitlab.com/AayushGupta69" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"><Gitlab size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
