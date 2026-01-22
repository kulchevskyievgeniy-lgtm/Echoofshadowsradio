import { motion } from 'motion/react';
import { BrandLogo } from './BrandLogo';

export function LogoShowcase() {
  return (
    <div className="space-y-16">
      <div>
        <h3 className="font-['Univermag'] text-xl tracking-[0.2em] uppercase text-white/90 mb-2">
          Logo System
        </h3>
        <p className="text-white/50 text-sm max-w-2xl">
          A family of marks that evoke echo, pulse, and shadow. Each variant serves different
          contexts while maintaining the core identity—minimal, abstract, and timeless.
        </p>
      </div>

      <motion.div
        className="space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="border border-white/10 rounded-sm p-12 bg-[#0a0a0a] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative">
            <p className="text-xs text-white/40 mb-8 font-['Univermag'] tracking-wider">
              PRIMARY WORDMARK
            </p>
            <div className="flex items-center justify-center min-h-[200px]">
              <BrandLogo variant="primary" size="lg" animated={true} />
            </div>
            <p className="text-xs text-white/30 mt-8 text-center max-w-md mx-auto">
              The main brand expression. Clean, uppercase typography with generous letter spacing.
              Used for primary touchpoints and introduction.
            </p>
          </div>
        </div>

        <div className="border border-white/10 rounded-sm p-12 bg-[#0a0a0a] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative">
            <p className="text-xs text-white/40 mb-8 font-['Univermag'] tracking-wider">
              ECHO VARIANT
            </p>
            <div className="flex items-center justify-center min-h-[200px]">
              <BrandLogo variant="echo" size="md" animated={true} />
            </div>
            <p className="text-xs text-white/30 mt-8 text-center max-w-md mx-auto">
              Multiple layers create a visual echo effect. Represents repetition, depth, and the
              fading signal. Ideal for animated contexts.
            </p>
          </div>
        </div>

        <div className="border border-white/10 rounded-sm p-12 bg-[#0a0a0a] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative">
            <p className="text-xs text-white/40 mb-8 font-['Univermag'] tracking-wider">
              PULSE SYMBOL
            </p>
            <div className="flex items-center justify-center min-h-[200px]">
              <BrandLogo variant="pulse" size="lg" animated={true} />
            </div>
            <p className="text-xs text-white/30 mt-8 text-center max-w-md mx-auto">
              Concentric circles radiating from a central point. Represents rhythm, signal, and
              hypnotic repetition. Works as an icon or loading state.
            </p>
          </div>
        </div>

        <div className="border border-white/10 rounded-sm p-12 bg-[#0a0a0a] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative">
            <p className="text-xs text-white/40 mb-8 font-['Univermag'] tracking-wider">
              SHADOW MARK
            </p>
            <div className="flex items-center justify-center min-h-[200px]">
              <BrandLogo variant="shadow" size="lg" animated={true} />
            </div>
            <p className="text-xs text-white/30 mt-8 text-center max-w-md mx-auto">
              Cascading lines suggesting motion blur or sound decay. Abstract and geometric. Perfect
              for minimal contexts and secondary branding.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="pt-8 border-t border-white/10">
        <h4 className="font-['Univermag'] text-sm tracking-[0.2em] uppercase text-white/70 mb-6">
          Usage Context
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-[#1a1a1a] rounded-sm">
            <div className="mb-4 h-20 flex items-center justify-center">
              <BrandLogo variant="primary" size="sm" animated={false} />
            </div>
            <p className="text-xs text-white/50 font-['Univermag'] tracking-wider">
              Headers, covers, main visuals
            </p>
          </div>
          <div className="p-4 bg-[#1a1a1a] rounded-sm">
            <div className="mb-4 h-20 flex items-center justify-center">
              <BrandLogo variant="echo" size="sm" animated={false} />
            </div>
            <p className="text-xs text-white/50 font-['Univermag'] tracking-wider">
              Animated intros, video content
            </p>
          </div>
          <div className="p-4 bg-[#1a1a1a] rounded-sm">
            <div className="mb-4 h-20 flex items-center justify-center">
              <BrandLogo variant="pulse" size="sm" animated={false} />
            </div>
            <p className="text-xs text-white/50 font-['Univermag'] tracking-wider">
              Icons, loading states, social
            </p>
          </div>
          <div className="p-4 bg-[#1a1a1a] rounded-sm">
            <div className="mb-4 h-20 flex items-center justify-center">
              <BrandLogo variant="shadow" size="sm" animated={false} />
            </div>
            <p className="text-xs text-white/50 font-['Univermag'] tracking-wider">
              Secondary marks, watermarks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
