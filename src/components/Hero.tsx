import { useRef, useEffect } from "react";
import gsap from "gsap";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const photoContainerRef = useRef<HTMLDivElement>(null);
  const floatingIcon1Ref = useRef<HTMLDivElement>(null);
  const floatingIcon2Ref = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const scrollDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(leftContentRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8 })
        .fromTo(headingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.6")
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .fromTo(photoContainerRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.8")
        .fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");

      // Floating animations
      gsap.to(floatingIcon1Ref.current, {
        y: -10, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(floatingIcon2Ref.current, {
        y: 10, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(scrollDotRef.current, {
        y: 10, duration: 1, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 floating-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div ref={leftContentRef} className="flex-1 text-center lg:text-left" style={{ opacity: 0 }}>
            <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight" style={{ opacity: 0 }}>
              Shaping <span className="gradient-text">Concepts</span>
              <br />
              into Real Projects
              <br />
              that Deliver <span className="gradient-text">Results</span>
            </h1>

            <p ref={descRef} className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0" style={{ opacity: 0 }}>
              Hi, I'm Aayush Gupta, a developer based in India with a passion for code.
            </p>

            <div ref={buttonsRef} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ opacity: 0 }}>
              <a href="#work" className="hero-button">SEE MY WORK</a>
              <a href="#contact" className="hero-button-outline">GET IN TOUCH</a>
            </div>
          </div>

          <div ref={photoContainerRef} className="flex-1 flex justify-center lg:justify-end" style={{ opacity: 0 }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-3xl blur-2xl scale-110" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden border-2 border-primary/30 animate-pulse-glow">
                <img src={profilePhoto} alt="Aayush Gupta" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              <div ref={floatingIcon1Ref} className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <span className="text-2xl">⚛️</span>
              </div>
              <div ref={floatingIcon2Ref} className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-xl backdrop-blur-sm border border-accent/30 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2" style={{ opacity: 0 }}>
        <div ref={scrollDotRef} className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
