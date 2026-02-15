import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const SkillCategory = ({
  title,
  items,
  className,
}: {
  title: string;
  items: { name: string; icon: string }[];
  className?: string;
}) => (
  <div className={className}>
    <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
      <span className="w-2 h-2 bg-primary rounded-full" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill) => (
        <div key={skill.name} className="skill-card flex items-center gap-2 skill-chip" style={{ opacity: 0 }}>
          <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef<HTMLElement>(null);

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Libraries & Frameworks", items: skills.frameworks },
    { title: "Databases & ORM", items: skills.databases },
    { title: "Developer Tools", items: skills.tools },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skills-header", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".skill-category", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".skill-chip", { opacity: 0, scale: 0.8 }, {
        opacity: 1, scale: 1, duration: 0.4, stagger: 0.05,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".role-tag", { opacity: 0, scale: 0.8 }, {
        opacity: 1, scale: 1, duration: 0.4, stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 60%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="skills-header text-center mb-16" style={{ opacity: 0 }}>
          <span className="section-heading">🤝 What I Bring to the Table</span>
          <h2 className="section-title mt-2">How I Can Contribute & My Key Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              items={category.items}
              className="skill-category"
            />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {["React Developer", "Python Developer", "Backend Developer", "Interactive Developer", "Project Manager"].map(
            (role) => (
              <span key={role} className="role-tag px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-foreground font-medium" style={{ opacity: 0 }}>
                {role}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
