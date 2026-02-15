import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/portfolioData";

const SkillCategory = ({ 
  title, 
  items, 
  index,
  isInView 
}: { 
  title: string; 
  items: { name: string; icon: string }[];
  index: number;
  isInView: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.1, duration: 0.6 }}
  >
    <h3 className="text-lg font-display font-semibold text-foreground mb-4 flex items-center gap-2">
      <span className="w-2 h-2 bg-primary rounded-full" />
      {title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {items.map((skill, i) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.1 + i * 0.05, duration: 0.4 }}
          className="skill-card flex items-center gap-2"
        >
          <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Libraries & Frameworks", items: skills.frameworks },
    { title: "Databases & ORM", items: skills.databases },
    { title: "Developer Tools", items: skills.tools },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-heading">🤝 What I Bring to the Table</span>
          <h2 className="section-title mt-2">How I Can Contribute & My Key Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              items={category.items}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Role Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {["React Developer", "Python Developer", "Backend Developer", "Interactive Developer", "Project Manager"].map(
            (role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-foreground font-medium"
              >
                {role}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
