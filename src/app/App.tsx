import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { EpisodesSection } from '@/app/components/EpisodesSection';
import { SubmitSection } from '@/app/components/SubmitSection';
import { FooterSection } from '@/app/components/FooterSection';
import { LoadingScreen } from '@/app/components/LoadingScreen';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalScroll;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative">
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 h-px bg-white/20 z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <EpisodesSection />
        <SubmitSection />
        <FooterSection />
      </main>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full border border-white/20 bg-[#1a1a1a]/80 backdrop-blur-sm flex items-center justify-center group hover:bg-white/5 hover:border-white/30 transition-all duration-300"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Ambient background effect - subtle grain */}
      <div 
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}