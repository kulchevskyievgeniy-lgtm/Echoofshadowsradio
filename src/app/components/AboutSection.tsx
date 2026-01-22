import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-12 text-center">
            {/* Decorative element */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex flex-col gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-px bg-white/30"
                    style={{ width: 60 - i * 8 }}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 0.3 - i * 0.05, width: 60 - i * 8 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <p className="font-['Univermag'] tracking-wider text-white/60 leading-loose text-lg">
                A space where rhythm slows.
              </p>
              
              <p className="font-['Univermag'] tracking-wider text-white/60 leading-loose text-lg">
                Where repetition becomes meditation.
              </p>
              
              <p className="font-['Univermag'] tracking-wider text-white/60 leading-loose text-lg">
                Where the signal fades into shadow,<br />
                and you drift deeper.
              </p>
            </motion.div>

            {/* Subtle divider */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <div className="h-px w-24 bg-white/10 mx-auto" />
            </motion.div>

            {/* Additional context */}
            <motion.p
              className="font-['Univermag'] tracking-wider text-white/40 text-sm leading-relaxed max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
            >
              Hypnotic frequencies. Minimal structures. Deep atmospheres.<br />
              Sound designed for the space between waking and sleep.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
