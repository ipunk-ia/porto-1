'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProductSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}

export default function ProductSection({ title, description, imageUrl, reverse = false }: ProductSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax
    gsap.fromTo(imageRef.current,
      { y: -60 },
      {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      }
    );

    // Text Reveal
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(descRef.current, {
      y: 40,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
        end: "top 50%",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen py-[var(--spacing-section)] flex items-center px-6 md:px-12 lg:px-24">
      <div className={`w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-[var(--spacing-content)] ${reverse ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Image Side */}
        <div ref={imageContainerRef} className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative overflow-hidden bg-border">
          <Image
            ref={imageRef}
            src={imageUrl}
            alt={title}
            fill
            className="object-cover scale-[1.2]"
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqMcAAIUAggHe2mE5AAAAAElFTkSuQmCC"
          />
        </div>

        {/* Text Side */}
        <div ref={textRef} className="w-full md:w-1/2 flex flex-col justify-center py-10 md:py-0">
          <h2 ref={titleRef} className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 text-text-primary leading-tight">
            {title}
          </h2>
          <p ref={descRef} className="font-body text-text-secondary text-lg leading-relaxed max-w-md">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
