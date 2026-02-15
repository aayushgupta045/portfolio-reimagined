import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".projects-header", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".project-card-item", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="projects-header text-center mb-16" style={{ opacity: 0 }}>
          <span className="section-heading">💼 Featured Projects</span>
          <h2 className="section-title mt-2">A Selection of My Work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group project-card-item" style={{ opacity: 0 }}>
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3 line-clamp-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors">
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
