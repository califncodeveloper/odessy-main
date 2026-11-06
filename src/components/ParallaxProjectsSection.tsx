import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { Award, ArrowRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { ParallaxProject } from '../types';

interface ProjectCardProps {
  project: ParallaxProject;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  totalProjects: number;
  onNavigateFurniture: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  progress,
  range,
  targetScale,
  totalProjects,
  onNavigateFurniture,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const cardScale = useTransform(progress, [range[0], 1], [1, targetScale]);
  const cardOpacity = useTransform(
    progress,
    [range[0], 1],
    [1, index === totalProjects - 1 ? 1 : 0.9]
  );

  const topOffset = 90 + index * 26;

  return (
    <div
      ref={containerRef}
      className="sticky top-0 flex items-center justify-center min-h-[85vh] py-6 sm:py-10"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div
        style={{
          scale: cardScale,
          opacity: cardOpacity,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-6xl rounded-3xl overflow-hidden bg-[#1A1815] border border-[#D4AF37]/30 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(212,175,55,0.06)] relative group backdrop-blur-xl"
      >
        {/* Subtle Top Glow Border */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80 z-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 w-full">
          {/* Mobile Title (visible ONLY on mobile / smaller screens < lg) */}
          <div className="block lg:hidden p-5 sm:p-6 pb-2 bg-gradient-to-b from-[#1E1C18] to-transparent">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#C5A059] uppercase tracking-widest font-mono font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                {project.client}
              </span>
              <span className="text-[11px] font-mono text-neutral-500">
                {project.location}
              </span>
            </div>
            <h3 className="font-serif font-bold text-2xl text-white leading-tight">
              {project.title}
            </h3>
          </div>

          {/* Parallax Image Side (7 cols) - In between title and description on mobile */}
          <div className="lg:col-span-7 h-72 sm:h-96 lg:h-[480px] overflow-hidden relative bg-[#141311]">
            <motion.img
              src={project.image}
              alt={project.title}
              style={{ scale: imageScale }}
              className="w-full h-full object-cover object-center filter brightness-95 group-hover:brightness-105 transition-all duration-700"
            />
            
            {/* Ambient Inner Shadow & Luxury Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1815] via-transparent to-black/40 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#1A1815]" />

            {/* Sticky Project Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase bg-[#161513]/85 text-[#F3E9DA] border border-[#D4AF37]/50 backdrop-blur-xl shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                Case 0{index + 1} • {project.year}
              </span>
              <span className="hidden sm:inline-block px-3 py-1.5 rounded-full text-xs font-mono text-neutral-300 bg-[#161513]/70 backdrop-blur-md border border-white/10">
                {project.location}
              </span>
            </div>

            {/* Interactive Image Hover Hint */}
            <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 bg-[#161513]/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Architectural Parallax Commission</span>
            </div>
          </div>

          {/* Details & Specs Side (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 bg-gradient-to-b from-[#1E1C18] to-[#161513]">
            <div>
              {/* Desktop Title & Client (hidden on mobile, visible lg+) */}
              <div className="hidden lg:block">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#C5A059] uppercase tracking-widest font-mono font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {project.client}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {project.location}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2 leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Description (appears after image on mobile) */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-5">
                {project.description}
              </p>

              {/* Products Installed Tags */}
              <div className="space-y-1.5 mb-5">
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 block">
                  Integrated Fitout:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.productsUsed.map((p, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-3 py-1 rounded-lg bg-white/5 text-neutral-200 border border-white/10 font-mono flex items-center gap-1"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome Highlight Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#D4AF37]/15 via-[#D4AF37]/5 to-transparent border-l-2 border-[#D4AF37] shadow-inner">
                <span className="text-[10px] uppercase text-[#C5A059] font-mono font-bold block mb-0.5">
                  Verified Outcome
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#F3E9DA]">
                  {project.highlightMetric}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={onNavigateFurniture}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-black border border-white/15 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 group/btn"
              >
                <span>View Pieces</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/919919915358?text=${encodeURIComponent(
                  `Hello Odessy Furniture, I would like to inquire about an architectural fitout similar to: ${project.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#25D366] hover:text-[#1EBE5D] flex items-center gap-1.5 font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> Inquire Commission
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ParallaxProjectsSectionProps {
  onNavigateFurniture: () => void;
}

export const ParallaxProjectsSection: React.FC<ParallaxProjectsSectionProps> = ({
  onNavigateFurniture,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      id="architectural-commissions"
      className="relative py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-white/10 pb-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#C5A059] border border-[#D4AF37]/30 text-xs uppercase tracking-widest font-mono mb-2">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>Scroll Parallax Showcase</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Architectural Commissions
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-3 md:mt-0 font-light leading-relaxed">
          Executive penthouses, tech innovation labs, and private sanctums tailored with Odessy architectural collections. Scroll to reveal stacked commissions.
        </p>
      </motion.div>

      {/* Stacked Parallax Cards Container */}
      <div className="relative">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (PROJECTS.length - i) * 0.04;
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={[i * (1 / PROJECTS.length), 1]}
              targetScale={targetScale}
              totalProjects={PROJECTS.length}
              onNavigateFurniture={onNavigateFurniture}
            />
          );
        })}
      </div>
    </section>
  );
};
