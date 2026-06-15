import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'motion/react'

export function useCounter(target, duration = 1.8) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    const controls = animate(0, target, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return controls.stop
  }, [inView, target, duration])

  return { ref, value }
}
