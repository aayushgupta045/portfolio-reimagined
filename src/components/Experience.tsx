import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".experience-header", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".experience-item", { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) }, {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.2,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="experience-header text-center mb-16" style={{ opacity: 0 }}>
          <span className="section-heading">💼 My Career Overview</span>
          <h2 className="section-title mt-2">Professional Work Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card experience-item" style={{ opacity: 0 }}>
              <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic text-sm flex-1">"{exp.review}"</p>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center p-2">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Responsibilities</h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
