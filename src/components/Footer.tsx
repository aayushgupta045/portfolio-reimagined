import { useRef, useEffect } from "react";
import gsap from "gsap";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".footer-content", { opacity: 0 }, { opacity: 1, duration: 0.6 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="footer-content flex flex-col md:flex-row items-center justify-between gap-4" style={{ opacity: 0 }}>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Aayush Gupta. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with <span className="gradient-text">❤️</span> using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
