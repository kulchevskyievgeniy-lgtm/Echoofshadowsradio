import { motion } from 'motion/react';

export function BrandPrinciples() {
  const principles = [
    {
      title: 'Emotion Through Restraint',
      description: 'Power comes from what is withheld, not what is shown. Minimal design creates space for the listener to project their own experience.',
    },
    {
      title: 'Abstract Over Literal',
      description: 'Avoid obvious symbols. Use suggestion, echo, and atmosphere to convey meaning without being direct.',
    },
    {
      title: 'Hypnotic Repetition',
      description: 'Rhythm and repetition create a meditative state. Pattern, pulse, and循環 guide the visual language.',
    },
    {
      title: 'Dark as Foundation',
      description: 'Darkness is not emptiness—it\'s depth, mystery, and potential. Build from shadow toward signal.',
    },
    {
      title: 'Motion in Stillness',
      description: 'Even static elements should suggest movement. Blur, echo, and gradient create the feeling of drift.',
    },
    {
      title: 'Timeless Over Trendy',
      description: 'Avoid fashionable aesthetics. The identity should feel as relevant in 10 years as it does today.',
    },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h3 className="font-['Univermag'] text-xl tracking-[0.2em] uppercase text-white/90 mb-2">
          Design Principles
        </h3>
        <p className="text-white/50 text-sm max-w-2xl">
          Core principles that guide every visual decision. These are not rules, but a philosophy
          of restraint and atmosphere.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle, index) => (
          <motion.div
            key={principle.title}
            className="p-6 bg-[#0a0a0a] border border-white/10 rounded-sm group hover:bg-[#1a1a1a] transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="text-white/30 font-mono text-xs pt-1">0{index + 1}</div>
              <div className="flex-1 space-y-2">
                <h4 className="font-['Univermag'] tracking-wider text-white/90">
                  {principle.title}
                </h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-white/10">
        <h4 className="font-['Univermag'] text-sm tracking-[0.2em] uppercase text-white/70 mb-6">
          Visual Direction
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="aspect-video bg-gradient-to-br from-white/5 to-transparent rounded-sm" />
            <p className="text-xs text-white/50 font-['Univermag'] tracking-wider">
              Soft gradients
            </p>
            <p className="text-xs text-white/30">
              Subtle transitions between darkness and light
            </p>
          </div>
          <div className="space-y-3">
            <div className="aspect-video bg-[#0a0a0a] rounded-sm relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-white/10"
                style={{ backdropFilter: 'blur(20px)' }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
            <p className="text-xs text-white/50 font-['Univermag'] tracking-wider">
              Motion blur
            </p>
            <p className="text-xs text-white/30">
              Distortion suggesting movement and drift
            </p>
          </div>
          <div className="space-y-3">
            <div className="aspect-video bg-[#1a1a1a] rounded-sm relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 bg-[#0a0a0a]" />
              </div>
            </div>
            <p className="text-xs text-white/50 font-['Univermag'] tracking-wider">
              Negative space
            </p>
            <p className="text-xs text-white/30">
              Emptiness as a compositional element
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
