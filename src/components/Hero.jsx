import { motion } from 'motion/react'
import { useTextReveal } from '../hooks/useTextReveal'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { n: 12, suf: '+', label: 'Years experience' },
  { n: 40, suf: '+', label: 'Projects shipped' },
  { n: 8, suf: '+', label: 'Yrs in security' },
]

function HeroStat({ n, suf, label }) {
  const { ref, value } = useCounter(n, 2)
  return (
    <div ref={ref} style={{ textAlign: 'center', padding: '28px 24px' }}>
      <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '2.8rem', color: '#EDEAE4', lineHeight: 1 }}>
        {value}{suf}
      </div>
      <div style={{ fontSize: '0.75rem', color: '#6B6B70', marginTop: 6 }}>{label}</div>
    </div>
  )
}

export default function Hero() {
  const titleRef = useTextReveal(0.35)

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 72, position: 'relative', overflow: 'hidden' }}>

      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.025,
        backgroundImage: 'linear-gradient(#EDEAE4 1px,transparent 1px),linear-gradient(90deg,#EDEAE4 1px,transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 40px', width: '100%', position: 'relative', zIndex: 2 }}>

        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid #242428', borderRadius: 100, padding: '6px 16px', marginBottom: 48 }}
        >
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#E5FF3D' }} className="animate-pulse" />
          <span style={{ fontSize: '0.7rem', color: '#6B6B70', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Available for projects — 2026
          </span>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 80, alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div>
            <h1 ref={titleRef} style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: '#EDEAE4',
              marginBottom: 32,
            }}>
              We Build.<br />
              <em style={{ fontStyle: 'italic', color: '#E5FF3D' }}>Secure.</em><br />
              Ship Fast.
            </h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.6 }}
              style={{ fontSize: '1.05rem', color: '#6B6B70', lineHeight: 1.7, maxWidth: 460, marginBottom: 40 }}
            >
              Full-stack .NET development with Azure cloud deployment and
              cybersecurity built into every sprint — not added after the fact.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: '#E5FF3D', color: '#0D0D0F', fontWeight: 600, fontSize: '0.875rem', padding: '14px 32px', borderRadius: 100, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.target.style.background = '#F4F2ED'}
                onMouseLeave={e => e.target.style.background = '#E5FF3D'}
              >
                Hire Us →
              </button>
              <button
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'transparent', color: '#EDEAE4', fontSize: '0.875rem', padding: '14px 32px', borderRadius: 100, border: '1px solid #242428', cursor: 'pointer', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.target.style.borderColor = '#6B6B70'}
                onMouseLeave={e => e.target.style.borderColor = '#242428'}
              >
                View Work
              </button>
            </motion.div>
          </div>

          {/* Right card */}
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.7 }}>
            <div className="card" style={{ overflow: 'hidden' }}>
              {/* Project thumb */}
              <div style={{ height: 200, background: 'linear-gradient(135deg, #2d1b69 0%, #1a1040 50%, #161618 100%)', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                  <div style={{ fontSize: '0.65rem', color: '#6B6B70', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>Featured Project</div>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '1.25rem', color: '#EDEAE4' }}>NexaPay Platform</div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                    {['ASP.NET Core', 'React', 'Azure'].map(t => (
                      <span key={t} style={{ fontSize: '0.65rem', color: '#6B6B70', border: '1px solid #242428', padding: '2px 8px', borderRadius: 4 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid #242428' }}>
                {stats.map((s, i) => (
                  <div key={s.label} style={{ borderRight: i < 2 ? '1px solid #242428' : 'none' }}>
                    <HeroStat {...s} />
                  </div>
                ))}
              </div>
            </div>

            {/* Security badge */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="card" style={{ marginTop: 16, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(229,255,61,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🛡</div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#EDEAE4' }}>Security-First Development</div>
                <div style={{ fontSize: '0.7rem', color: '#6B6B70', marginTop: 2 }}>8+ years penetration testing & secure code review</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #6B6B70, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
