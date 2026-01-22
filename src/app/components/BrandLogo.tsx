import { motion } from 'motion/react';
import { useState } from 'react';

interface BrandLogoProps {
  variant?: 'primary' | 'echo' | 'pulse' | 'shadow';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export function BrandLogo({ variant = 'primary', size = 'md', animated = true }: BrandLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
    xl: 'text-8xl',
  };

  if (variant === 'echo') {
    return (
      <div
        className="relative inline-block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className={`${sizeClasses[size]} font-['Univermag'] tracking-[0.3em] uppercase text-white/90`}
          animate={animated ? {
            opacity: [0.9, 0.7, 0.9],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Echo of Shadows
        </motion.div>
        {animated && (
          <>
            <motion.div
              className={`${sizeClasses[size]} font-['Univermag'] tracking-[0.3em] uppercase text-white/30 absolute top-0 left-0`}
              animate={{
                opacity: [0.3, 0, 0.3],
                x: [0, 2, 0],
                y: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              Echo of Shadows
            </motion.div>
            <motion.div
              className={`${sizeClasses[size]} font-['Univermag'] tracking-[0.3em] uppercase text-white/15 absolute top-0 left-0`}
              animate={{
                opacity: [0.15, 0, 0.15],
                x: [0, 4, 0],
                y: [0, 4, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              Echo of Shadows
            </motion.div>
          </>
        )}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className="relative inline-block">
        <motion.svg
          width={size === 'sm' ? '60' : size === 'md' ? '100' : size === 'lg' ? '150' : '200'}
          height={size === 'sm' ? '60' : size === 'md' ? '100' : size === 'lg' ? '150' : '200'}
          viewBox="0 0 100 100"
          className="overflow-visible"
        >
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            animate={animated ? {
              r: [20, 40, 20],
              opacity: [0.8, 0, 0.8],
            } : {}}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            animate={animated ? {
              r: [20, 40, 20],
              opacity: [0.6, 0, 0.6],
            } : {}}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1,
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            animate={animated ? {
              r: [20, 40, 20],
              opacity: [0.4, 0, 0.4],
            } : {}}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2,
            }}
          />
          <circle cx="50" cy="50" r="3" fill="white" opacity="0.9" />
        </motion.svg>
      </div>
    );
  }

  if (variant === 'shadow') {
    return (
      <div className="relative inline-flex items-center gap-2">
        <motion.div
          className="flex flex-col gap-0.5"
          animate={animated ? {
            opacity: [0.9, 0.6, 0.9],
          } : {}}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="h-0.5 bg-white"
              style={{
                width: size === 'sm' ? 30 - i * 3 : size === 'md' ? 50 - i * 5 : size === 'lg' ? 70 - i * 7 : 90 - i * 9,
              }}
              animate={animated ? {
                opacity: [0.9 - i * 0.15, 0.3 - i * 0.05, 0.9 - i * 0.15],
              } : {}}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  // Primary variant - simple wordmark
  return (
    <motion.div
      className={`${sizeClasses[size]} font-['Univermag'] tracking-[0.3em] uppercase text-white/90`}
      animate={animated ? {
        opacity: [0.9, 0.85, 0.9],
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      Echo of Shadows
    </motion.div>
  );
}
