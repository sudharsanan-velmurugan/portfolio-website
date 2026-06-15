import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const links = ['Work', 'About', 'Team', 'Services', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (id) => {
    setOpen(false)
    setTimeout(() => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }), 60)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(13,13,15,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #242428' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '1.15rem', color: '#EDEAE4', letterSpacing: '-0.01em' }}>
              NexaStack
            </span>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E5FF3D', display: 'inline-block' }} />
          </button>

          {/* Desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden md:flex">
            {links.map(l => (
              <button key={l} onClick={() => go(l)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', color: '#6B6B70', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#EDEAE4'}
                onMouseLeave={e => e.target.style.color = '#6B6B70'}
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => go('Contact')}
              style={{ background: '#E5FF3D', color: '#0D0D0F', fontWeight: 600, fontSize: '0.8rem', padding: '8px 20px', borderRadius: 100, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
              onMouseEnter={e => e.target.style.background = '#F4F2ED'}
              onMouseLeave={e => e.target.style.background = '#E5FF3D'}
            >
              Hire Us
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ display: 'block', width: 22, height: 1.5, background: '#EDEAE4', transition: 'all 0.25s', transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: '#EDEAE4', transition: 'all 0.25s', opacity: open ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 1.5, background: '#EDEAE4', transition: 'all 0.25s', transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 40, background: '#0D0D0F', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40 }}
          >
            {links.map((l, i) => (
              <motion.button key={l} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                onClick={() => go(l)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '2.8rem', color: '#EDEAE4' }}
              >
                {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
