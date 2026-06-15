import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

export function useTextReveal(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const split = new SplitText(el, { type: 'chars' })
    const anim = gsap.from(split.chars, {
      opacity: 0,
      y: 50,
      duration: 0.7,
      stagger: 0.018,
      ease: 'power4.out',
      delay,
    })
    return () => {
      anim.kill()
      split.revert()
    }
  }, [delay])

  return ref
}

export function useWordsReveal(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const split = new SplitText(el, { type: 'words' })
    const anim = gsap.from(split.words, {
      opacity: 0,
      y: 25,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power3.out',
      delay,
    })
    return () => {
      anim.kill()
      split.revert()
    }
  }, [delay])

  return ref
}
