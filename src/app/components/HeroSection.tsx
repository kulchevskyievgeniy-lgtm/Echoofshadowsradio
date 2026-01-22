import { motion } from 'motion/react';
import { BrandLogo } from './BrandLogo';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        {/* Subtle grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Ambient gradient orbs */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-white/[0.008] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.008, 0.012, 0.008],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-white/[0.006] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.006, 0.01, 0.006],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Subtle decorative element above logo */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex gap-1 items-end h-8">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-0.5 bg-white/20"
                  animate={{
                    height: [
                      8 + Math.sin(i * 0.5) * 4,
                      16 + Math.sin(i * 0.5) * 8,
                      8 + Math.sin(i * 0.5) * 4,
                    ],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Logo */}
          <div className="flex justify-center">
            <BrandLogo variant="echo" size="xl" animated={true} />
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <p className="font-['Univermag'] tracking-[0.3em] uppercase text-white/40 text-sm">
              Between sleep and waking
            </p>
          </motion.div>

          {/* Listen CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.button
              className="group relative px-12 py-4 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const element = document.getElementById('episodes');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {/* Button background */}
              <div className="absolute inset-0 border border-white/20 rounded-sm" />
              <motion.div
                className="absolute inset-0 bg-white/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Button text */}
              <span className="relative font-['Univermag'] tracking-[0.25em] uppercase text-white/80 text-sm">
                Listen
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
