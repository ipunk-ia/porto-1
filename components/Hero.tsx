'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(imageRef.current, 
      { scale: 1.05 },
      { scale: 1, duration: 2, ease: "power2.out" }
    )
    .fromTo(headlineRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=1.5"
    )
    .fromTo(subtextRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    );

    // Fade out scroll indicator on scroll
    const handleScroll = () => {
      if (window.scrollY > 50 && scrollRef.current) {
        gsap.to(scrollRef.current, { opacity: 0, duration: 0.5 });
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black/30" />
      <Image
        ref={imageRef}
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600"
        alt="Luxury Interior"
        fill
        className="object-cover z-[-1]"
        priority
      />
      <div className="relative z-10 flex flex-col items-center text-surface text-center px-4">
        <h1 ref={headlineRef} className="font-display font-light text-[clamp(4rem,8vw,8rem)] leading-none mb-6 opacity-0 text-surface drop-shadow-sm">
          Curated Spaces
        </h1>
        <p ref={subtextRef} className="font-body text-lg md:text-xl font-light tracking-wide max-w-lg opacity-0 text-surface/90">
          Redefining understated luxury through minimalist design and refined craftsmanship.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-surface opacity-80 mix-blend-exclusion">
        <span className="text-xs uppercase tracking-[0.3em] font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-surface/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-surface animate-[scroll-down_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
