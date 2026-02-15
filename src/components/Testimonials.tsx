import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const ref = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonials-header", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
      gsap.fromTo(".testimonials-content", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, delay: 0.2,
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const animateCard = useCallback((direction: number) => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      opacity: 0, x: -50 * direction, duration: 0.2,
      onComplete: () => {
        setCurrentIndex((prev) => {
          const next = prev + direction;
          return next < 0 ? testimonials.length - 1 : next % testimonials.length;
        });
        gsap.fromTo(cardRef.current, { opacity: 0, x: 50 * direction }, { opacity: 1, x: 0, duration: 0.3 });
      },
    });
  }, []);

  return (
    <section id="testimonials" ref={ref} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="testimonials-header text-center mb-16" style={{ opacity: 0 }}>
          <span className="section-heading">⭐️ Customer feedback highlights</span>
          <h2 className="section-title mt-2">What People Say About Me?</h2>
        </div>

        <div className="testimonials-content max-w-4xl mx-auto" style={{ opacity: 0 }}>
          <div className="relative">
            <div ref={cardRef} className="testimonial-card">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-14 h-14 rounded-full object-cover border-2 border-primary/30" />
                <div>
                  <h4 className="font-display font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button onClick={() => animateCard(-1)} className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const dir = index > currentIndex ? 1 : -1;
                      if (index !== currentIndex) animateCard(dir);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>
              <button onClick={() => animateCard(1)} className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
