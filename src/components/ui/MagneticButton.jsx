import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function MagneticButton({ children, className = '', onClick, type = 'button' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouse = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    x.set((e.clientX - left - width / 2) * 0.35)
    y.set((e.clientY - top - height / 2) * 0.35)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
}
