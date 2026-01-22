import { motion } from 'motion/react';
import { Instagram, Music, Radio } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export function FooterSection() {
  const socialLinks = [
    {
      name: 'SoundCloud',
      icon: Music,
      url: 'https://soundcloud.com/echofshadows',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/echofshadows',
    },
    {
      name: 'Mixcloud',
      icon: Radio,
      url: 'https://mixcloud.com/echofshadows',
    },
  ];

  return (
    <footer className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-16">
            {/* Logo */}
            <div className="flex justify-center">
              <BrandLogo variant="shadow" size="md" animated={false} />
            </div>

            {/* Social links */}
            <motion.div
              className="flex justify-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/5 group-hover:border-white/30 transition-all duration-300">
                    <link.icon className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors duration-300" />
                  </div>
                  <span className="font-['Univermag'] tracking-wider text-xs text-white/30 group-hover:text-white/50 transition-colors duration-300">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px bg-white/5" />

            {/* Credits & info */}
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="font-['Univermag'] tracking-wider text-white/30 text-xs">
                A space for hypnotic frequencies and deep listening
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-xs font-['Univermag'] tracking-wider text-white/20">
                <span>Echo of Shadows</span>
                <span>·</span>
                <span>Est. 2024</span>
                <span>·</span>
                <span>Berlin</span>
              </div>

              <p className="font-mono text-xs text-white/15 pt-4">
                © 2026 Echo of Shadows. All rights reserved.
              </p>
            </motion.div>

            {/* Final decorative element */}
            <motion.div
              className="flex justify-center pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              <div className="flex flex-col gap-0.5 items-center">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-px bg-white/10"
                    style={{ width: 20 - i * 4 }}
                    animate={{
                      opacity: [0.1 - i * 0.02, 0.15 - i * 0.02, 0.1 - i * 0.02],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
