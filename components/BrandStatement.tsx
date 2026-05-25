'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[60vh] md:min-h-[80vh] bg-text-primary text-surface flex items-center justify-center px-6 md:px-12 text-center py-24">
      <h2 ref={textRef} className="font-display italic text-[clamp(2.5rem,5vw,4.5rem)] max-w-5xl font-light leading-snug">
        “Design that respects the silence of the room, elevating the everyday into the extraordinary.”
      </h2>
    </section>
  );
}
