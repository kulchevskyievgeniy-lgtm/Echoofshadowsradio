import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function SubmitSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Background element */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent rounded-sm -z-10" />
            
            <div className="p-12 text-center space-y-8">
              {/* Icon */}
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <Send className="w-5 h-5 text-white/30" />
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h3
                className="font-['Univermag'] tracking-[0.2em] uppercase text-white/70 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Submit a Mix
              </motion.h3>

              {/* Description */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p className="font-['Univermag'] tracking-wider text-white/50 leading-relaxed">
                  We welcome carefully crafted mixes that honor<br />
                  the space between sound and silence.
                </p>
                <p className="font-['Univermag'] tracking-wider text-white/30 text-sm">
                  Hypnotic · Minimal · Intentional
                </p>
              </motion.div>

              {/* CTA button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.a
                  href="mailto:submit@echofshadows.com?subject=Mix Submission"
                  className="group inline-block relative px-10 py-3 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button border */}
                  <div className="absolute inset-0 border border-white/20 rounded-sm" />
                  
                  {/* Button hover background */}
                  <motion.div
                    className="absolute inset-0 bg-white/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Button text */}
                  <span className="relative font-['Univermag'] tracking-[0.2em] uppercase text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
                    Send Your Mix
                  </span>
                </motion.a>
              </motion.div>

              {/* Additional info */}
              <motion.p
                className="font-['Univermag'] tracking-wider text-white/30 text-xs pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Include mix link · tracklist · brief note about your approach
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
