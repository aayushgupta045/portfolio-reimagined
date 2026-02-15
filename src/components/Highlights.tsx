import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { highlights } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".highlight-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="gradient-border p-6 text-center hover:scale-105 transition-transform duration-300 highlight-item" style={{ opacity: 0 }}>
              <span className="text-4xl mb-4 block">{highlight.icon}</span>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
