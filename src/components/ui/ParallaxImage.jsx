import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

export function ParallaxImage({ gradient, label, className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])

  return (
    <div ref={ref} className={`overflow-hidden rounded-2xl ${className}`}>
      <motion.div
        style={{ y }}
        className={`w-full h-full bg-gradient-to-br ${gradient} scale-110 flex items-center justify-center min-h-64`}
      >
        <span className="text-white/20 text-sm tracking-widest uppercase font-body">
          {label}
        </span>
      </motion.div>
    </div>
  )
}
