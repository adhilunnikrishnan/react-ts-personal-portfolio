'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { TerminalWindow } from './ui/TerminalWindow';
import { AboutTerminal } from './ui/AboutTerminal';


export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <SectionBackground>
      <section id="about" ref={sectionRef}>
        <div className="container mx-auto max-w-6xl px-6 sm:px-8">
          <SectionTitle subtitle="Passionate developer building innovative solutions and solving real-world problems.">
            About Me
          </SectionTitle>

          {/* Try me hint - separate div above the grid */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center justify-center gap-2 md:justify-start"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-base font-bold animate-text-shimmer"
            >
              Try me!
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              click & type
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 400, damping: 15 }}
              className="flex shrink-0"
            >
              <ChevronDown className="h-5 w-5 text-cyan-400 animate-bounce-down" />
            </motion.div>
          </motion.div>

          {/* Grid: terminal | cat bio */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* Left: Terminal */}
            <div className="flex min-h-[320px] justify-center md:justify-start sm:min-h-[360px]">
              <TerminalWindow />
            </div>

            {/* Right: Cat bio */}
            <div className="flex min-h-[320px] items-stretch sm:min-h-[360px]">
              <AboutTerminal isInView={isInView} />
            </div>

          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
