import { motion } from 'motion/react';

export function TypographySystem() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="font-['Univermag'] text-xl tracking-[0.2em] uppercase text-white/90 mb-2">
          Typography
        </h3>
        <p className="text-white/50 text-sm max-w-2xl">
          Univermag Regular serves as the primary typeface. Minimal, neutral, and timeless.
          Letter spacing creates breathing room and a hypnotic rhythm.
        </p>
      </div>

      <div className="space-y-8">
        <motion.div
          className="pb-8 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs text-white/40 mb-4 font-mono">Display / 72px</p>
          <h1 className="font-['Univermag'] text-7xl tracking-[0.3em] uppercase text-white/90">
            Echo of Shadows
          </h1>
        </motion.div>

        <motion.div
          className="pb-8 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xs text-white/40 mb-4 font-mono">Headline / 48px</p>
          <h2 className="font-['Univermag'] text-5xl tracking-[0.25em] uppercase text-white/90">
            Hypnotic Frequencies
          </h2>
        </motion.div>

        <motion.div
          className="pb-8 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs text-white/40 mb-4 font-mono">Title / 32px</p>
          <h3 className="font-['Univermag'] text-3xl tracking-[0.2em] uppercase text-white/90">
            Episode Title Format
          </h3>
        </motion.div>

        <motion.div
          className="pb-8 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs text-white/40 mb-4 font-mono">Subtitle / 20px</p>
          <h4 className="font-['Univermag'] text-xl tracking-[0.15em] uppercase text-white/90">
            Immersion · Flow · Pulse
          </h4>
        </motion.div>

        <motion.div
          className="pb-8 border-b border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs text-white/40 mb-4 font-mono">Body / 16px</p>
          <p className="font-['Univermag'] text-base tracking-wider text-white/70 max-w-3xl leading-relaxed">
            A hypnotic audio show exploring the space between sleep and waking. Built around slow,
            repetitive rhythms, shadowy atmospheres, and a sense of inner motion. The sound ranges
            from hypnotic techno to ambient and minimal deep textures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xs text-white/40 mb-4 font-mono">Caption / 12px</p>
          <p className="font-['Univermag'] text-xs tracking-wider text-white/50 uppercase">
            Metadata · Duration · Tracklist
          </p>
        </motion.div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10">
        <h4 className="font-['Univermag'] text-sm tracking-[0.2em] uppercase text-white/70 mb-6">
          Usage Guidelines
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 bg-white/50 rounded-full mt-2" />
              <div>
                <p className="text-sm text-white/70 font-['Univermag'] tracking-wider">
                  Always use uppercase for titles
                </p>
                <p className="text-xs text-white/40 mt-1">Maintains consistency and authority</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 bg-white/50 rounded-full mt-2" />
              <div>
                <p className="text-sm text-white/70 font-['Univermag'] tracking-wider">
                  Generous letter spacing
                </p>
                <p className="text-xs text-white/40 mt-1">Creates rhythm and breathing room</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 bg-white/50 rounded-full mt-2" />
              <div>
                <p className="text-sm text-white/70 font-['Univermag'] tracking-wider">
                  Minimal color contrast
                </p>
                <p className="text-xs text-white/40 mt-1">White/gray on dark only</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 bg-white/50 rounded-full mt-2" />
              <div>
                <p className="text-sm text-white/70 font-['Univermag'] tracking-wider">
                  Never use bold or italic
                </p>
                <p className="text-xs text-white/40 mt-1">Regular weight maintains calm</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 bg-white/50 rounded-full mt-2" />
              <div>
                <p className="text-sm text-white/70 font-['Univermag'] tracking-wider">
                  Ample whitespace
                </p>
                <p className="text-xs text-white/40 mt-1">Let text breathe and drift</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 bg-white/50 rounded-full mt-2" />
              <div>
                <p className="text-sm text-white/70 font-['Univermag'] tracking-wider">
                  Mono for technical info
                </p>
                <p className="text-xs text-white/40 mt-1">Timestamps, durations, codes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
