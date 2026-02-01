import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground text-sm"
          >
            © {new Date().getFullYear()} Aayush Gupta. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground text-sm"
          >
            Built with <span className="gradient-text">❤️</span> using React & TailwindCSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
