import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { highlights } from "@/data/portfolioData";

const Highlights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="gradient-border p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <span className="text-4xl mb-4 block">{highlight.icon}</span>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
