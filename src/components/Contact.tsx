import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Github, Linkedin, Gitlab } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-heading">💬 Have questions or ideas? Let's talk! 🚀</span>
          <h2 className="section-title mt-2">Get in Touch – Let's Connect</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="contact-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="contact-input"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={6}
                className="contact-input resize-none"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="hero-button w-full flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 flex justify-center gap-6"
          >
            <a
              href="mailto:contact@aayushgupta.dev"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/AayushGupta69"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/aayushgupta69"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://gitlab.com/AayushGupta69"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
            >
              <Gitlab size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
