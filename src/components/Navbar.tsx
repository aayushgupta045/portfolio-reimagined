import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/portfolioData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -100 }, { y: 0, duration: 0.5, ease: "power3.out" });
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (isMobileMenuOpen) {
      gsap.fromTo(mobileMenuRef.current, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" });
    } else {
      gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      ref={navRef}
      style={{ transform: "translateY(-100px)" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-display font-bold text-foreground">Aayush Gupta</a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-sm font-medium">{link.label}</a>
            ))}
            <a href="#contact" className="px-5 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300">Contact me</a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div ref={mobileMenuRef} className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="py-2 text-primary font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact me</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
