'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import Link from 'next/link';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 md:py-10 text-text-primary mix-blend-difference lg:mix-blend-normal"
      style={{ color: 'var(--color-surface)', mixBlendMode: 'difference' }}
    >
      <Link href="/" className="font-display text-2xl tracking-wide uppercase">
        Lumina
      </Link>
      <div className="flex gap-8 text-sm uppercase tracking-widest">
        <Link href="#collection" className="hover:opacity-60 transition-opacity">Collection</Link>
        <Link href="#about" className="hover:opacity-60 transition-opacity">About</Link>
      </div>
    </motion.nav>
  );
}
