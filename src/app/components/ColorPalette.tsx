import { motion } from 'motion/react';

interface ColorSwatchProps {
  name: string;
  color: string;
  usage: string;
}

function ColorSwatch({ name, color, usage }: ColorSwatchProps) {
  return (
    <motion.div
      className="group cursor-default"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="w-full h-32 rounded-sm mb-3 relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <motion.div
          className="absolute inset-0 bg-white/5"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="space-y-1">
        <p className="font-['Univermag'] text-sm tracking-wider text-white/90">{name}</p>
        <p className="font-mono text-xs text-white/50">{color}</p>
        <p className="text-xs text-white/40 mt-2">{usage}</p>
      </div>
    </motion.div>
  );
}

export function ColorPalette() {
  const colors = [
    {
      name: 'VOID',
      color: '#0a0a0a',
      usage: 'Primary background, depth',
    },
    {
      name: 'SHADOW',
      color: '#1a1a1a',
      usage: 'Secondary surfaces',
    },
    {
      name: 'ECHO',
      color: '#2a2a2a',
      usage: 'Tertiary elements, cards',
    },
    {
      name: 'SIGNAL',
      color: '#e8e8e8',
      usage: 'Primary text, key elements',
    },
    {
      name: 'DRIFT',
      color: '#8a8a8a',
      usage: 'Secondary text, muted elements',
    },
    {
      name: 'PULSE',
      color: '#4a4a4a',
      usage: 'Subtle accents, borders',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-['Univermag'] text-xl tracking-[0.2em] uppercase text-white/90 mb-2">
          Color System
        </h3>
        <p className="text-white/50 text-sm max-w-2xl">
          A restrained palette built on shadows, depth, and minimal contrast. Each color represents
          a state between darkness and signal.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {colors.map((color) => (
          <ColorSwatch key={color.name} {...color} />
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-white/10">
        <h4 className="font-['Univermag'] text-sm tracking-[0.2em] uppercase text-white/70 mb-4">
          Application
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#1a1a1a] rounded">
            <p className="text-xs text-white/40 mb-2">On Dark</p>
            <div className="space-y-2">
              <div className="h-8 bg-[#0a0a0a] flex items-center px-3">
                <span className="text-sm text-[#e8e8e8]">Primary text</span>
              </div>
              <div className="h-8 bg-[#0a0a0a] flex items-center px-3">
                <span className="text-sm text-[#8a8a8a]">Secondary text</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#2a2a2a] rounded">
            <p className="text-xs text-white/40 mb-2">Accent Usage</p>
            <div className="space-y-2">
              <div className="h-8 bg-[#0a0a0a] flex items-center px-3 border-l-2 border-[#4a4a4a]">
                <span className="text-sm text-[#e8e8e8]">Subtle highlight</span>
              </div>
              <div className="h-8 bg-[#0a0a0a] flex items-center px-3 border-l-2 border-[#e8e8e8]">
                <span className="text-sm text-[#e8e8e8]">Active state</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
