import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import image1 from 'figma:asset/7f728a4ec31ddb35cfd5c7360912c5d7c84f4399.png';
import image2 from 'figma:asset/975075ddfd42d1a7a0395d57b95a0c3bc057287a.png';

interface Episode {
  number: string;
  title: string;
  artist: string;
  duration: string;
  soundcloudUrl: string;
  imageUrl: string;
}

function EpisodeCard({ episode, index }: { episode: Episode; index: number }) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <a
        href={episode.soundcloudUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Episode artwork */}
        <div className="relative aspect-square rounded-sm overflow-hidden bg-[#0a0a0a] mb-4">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-700 group-hover:opacity-50"
            style={{ backgroundImage: `url(${episode.imageUrl})` }}
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/70 to-[#0a0a0a]/90" />

          {/* Episode number */}
          <div className="absolute top-6 left-6">
            <p className="font-mono text-xs text-white/30">EP</p>
            <p className="font-mono text-3xl text-white/80">{episode.number}</p>
          </div>

          {/* Play button - appears on hover */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/5">
              <Play className="w-6 h-6 text-white/70 fill-white/70 ml-1" />
            </div>
          </motion.div>

          {/* Duration */}
          <div className="absolute bottom-6 right-6">
            <p className="font-mono text-xs text-white/40">{episode.duration}</p>
          </div>

          {/* Border that appears on hover */}
          <motion.div
            className="absolute inset-0 border border-white/20 rounded-sm"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Episode info */}
        <div className="space-y-2">
          <h3 className="font-['Univermag'] tracking-wider text-white/90 group-hover:text-white transition-colors duration-300">
            {episode.title}
          </h3>
          <p className="font-['Univermag'] tracking-wider text-sm text-white/40">
            {episode.artist}
          </p>
        </div>
      </a>
    </motion.div>
  );
}

export function EpisodesSection() {
  const episodes: Episode[] = [
    {
      number: '06',
      title: 'Drift State',
      artist: 'Selected by Morpheus',
      duration: '90:00',
      soundcloudUrl: '#',
      imageUrl: image1,
    },
    {
      number: '05',
      title: 'Signal Decay',
      artist: 'Selected by Nyx',
      duration: '75:00',
      soundcloudUrl: '#',
      imageUrl: image2,
    },
    {
      number: '04',
      title: 'Shadow Pulse',
      artist: 'Selected by Umbra',
      duration: '82:00',
      soundcloudUrl: '#',
      imageUrl: image1,
    },
    {
      number: '03',
      title: 'Void Frequency',
      artist: 'Selected by Somnus',
      duration: '88:00',
      soundcloudUrl: '#',
      imageUrl: image2,
    },
  ];

  return (
    <section id="episodes" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <motion.h2
              className="font-['Univermag'] tracking-[0.25em] uppercase text-white/80 text-sm mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Recent Episodes
            </motion.h2>
            <motion.div
              className="w-12 h-px bg-white/20 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </div>

          {/* Episodes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {episodes.map((episode, index) => (
              <EpisodeCard key={episode.number} episode={episode} index={index} />
            ))}
          </div>

          {/* Archive link */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#"
              className="inline-block font-['Univermag'] tracking-wider text-xs text-white/40 hover:text-white/70 transition-colors duration-300 pb-1 border-b border-white/10 hover:border-white/30"
            >
              View archive
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}