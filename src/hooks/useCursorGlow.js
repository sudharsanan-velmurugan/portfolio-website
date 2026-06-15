import { useEffect } from 'react'

export function useCursorGlow() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty('--gx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--gy', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])
}
