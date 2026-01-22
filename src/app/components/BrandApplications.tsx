import { motion } from 'motion/react';
import { BrandLogo } from './BrandLogo';
import image1 from 'figma:asset/7f728a4ec31ddb35cfd5c7360912c5d7c84f4399.png';
import image2 from 'figma:asset/975075ddfd42d1a7a0395d57b95a0c3bc057287a.png';

interface MockupProps {
  type: 'social' | 'mix' | 'poster' | 'story';
  title?: string;
  subtitle?: string;
}

function SocialMediaPost() {
  return (
    <motion.div
      className="w-full aspect-square bg-[#0a0a0a] rounded-sm overflow-hidden relative group cursor-default"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <BrandLogo variant="shadow" size="sm" animated={false} />
          <div className="text-right">
            <p className="font-['Univermag'] text-xs tracking-wider text-white/50">EPISODE</p>
            <p className="font-mono text-xl text-white/90">#06</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-['Univermag'] text-2xl tracking-[0.2em] uppercase text-white/90 mb-2">
            Drift State
          </h3>
          <p className="text-sm text-white/50 font-['Univermag'] tracking-wider">
            90 min · Hypnotic Techno
          </p>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 border border-white/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

function MixCover() {
  return (
    <motion.div
      className="w-full aspect-square bg-[#0a0a0a] rounded-sm overflow-hidden relative group cursor-default"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${image2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[#0a0a0a]/70" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6">
          <BrandLogo variant="pulse" size="md" animated={false} />
          <div>
            <p className="font-['Univermag'] text-xs tracking-[0.3em] uppercase text-white/50 mb-2">
              Echo of Shadows
            </p>
            <h3 className="font-['Univermag'] text-4xl tracking-[0.2em] uppercase text-white/90">
              Episode 06
            </h3>
            <p className="text-sm text-white/40 font-['Univermag'] tracking-wider mt-4">
              The Signal Fades
            </p>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 border border-white/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

function Poster() {
  return (
    <motion.div
      className="w-full aspect-[3/4] bg-[#0a0a0a] rounded-sm overflow-hidden relative group cursor-default"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-[#0a0a0a]" />
      
      <div className="absolute inset-0 p-12 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-['Univermag'] text-xs tracking-[0.3em] uppercase text-white/50">
              Live Session
            </p>
            <p className="font-mono text-sm text-white/70 mt-1">22.01.2026</p>
          </div>
          <BrandLogo variant="shadow" size="sm" animated={false} />
        </div>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div
              className="flex flex-col gap-1"
              animate={{
                opacity: [0.9, 0.6, 0.9],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1 bg-white"
                  style={{
                    width: `${100 - i * 10}%`,
                    opacity: 0.9 - i * 0.1,
                  }}
                  animate={{
                    opacity: [0.9 - i * 0.1, 0.3 - i * 0.05, 0.9 - i * 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </div>
          
          <div>
            <h2 className="font-['Univermag'] text-5xl tracking-[0.25em] uppercase text-white/90 mb-4">
              Echo of Shadows
            </h2>
            <p className="text-white/50 font-['Univermag'] tracking-wider text-sm">
              Hypnotic · Minimal · Deep
            </p>
          </div>
          
          <div className="flex gap-8 text-xs font-['Univermag'] tracking-wider text-white/40">
            <div>
              <p className="text-white/30 mb-1">Duration</p>
              <p>120 min</p>
            </div>
            <div>
              <p className="text-white/30 mb-1">Format</p>
              <p>Livestream</p>
            </div>
            <div>
              <p className="text-white/30 mb-1">Platform</p>
              <p>Digital Radio</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 border border-white/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

function StoryFormat() {
  return (
    <motion.div
      className="w-full aspect-[9/16] bg-[#0a0a0a] rounded-sm overflow-hidden relative group cursor-default"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="text-center">
          <BrandLogo variant="shadow" size="sm" animated={false} />
        </div>
        
        <div className="text-center space-y-4">
          <h3 className="font-['Univermag'] text-3xl tracking-[0.2em] uppercase text-white/90">
            New Episode
          </h3>
          <p className="text-white/50 font-['Univermag'] tracking-wider text-sm">
            Out Now · All Platforms
          </p>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 border border-white/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function BrandApplications() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="font-['Univermag'] text-xl tracking-[0.2em] uppercase text-white/90 mb-2">
          Applications
        </h3>
        <p className="text-white/50 text-sm max-w-2xl">
          The brand identity adapts across various touchpoints while maintaining a consistent
          hypnotic, minimal aesthetic. Each format emphasizes atmosphere over decoration.
        </p>
      </div>

      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="font-['Univermag'] text-sm tracking-[0.2em] uppercase text-white/70 mb-4">
            Social Media Posts
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SocialMediaPost />
            <SocialMediaPost />
            <SocialMediaPost />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4 className="font-['Univermag'] text-sm tracking-[0.2em] uppercase text-white/70 mb-4">
            Mix Covers
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MixCover />
            <MixCover />
            <MixCover />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="font-['Univermag'] text-sm tracking-[0.2em] uppercase text-white/70 mb-4">
            Event Posters
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Poster />
            <Poster />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="font-['Univermag'] text-sm tracking-[0.2em] uppercase text-white/70 mb-4">
            Story Format
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <StoryFormat />
            <StoryFormat />
            <StoryFormat />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
