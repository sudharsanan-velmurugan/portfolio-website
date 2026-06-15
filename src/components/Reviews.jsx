import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { testimonials } from '../data/testimonials'

export default function Reviews() {
  const [cur, setCur] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (paused || reduced) return
    const id = setInterval(() => setCur(c => (c + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [paused, reduced])

  const go = (dir) => { setCur(c => (c + dir + testimonials.length) % testimonials.length); setPaused(true) }

  return (
    <section id="reviews" style={{ padding: '120px 0', background: '#111113', borderTop: '1px solid #1E1E21' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="label" style={{ marginBottom: 16 }}>Client Reviews</div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#EDEAE4', lineHeight: 1.1 }}>
            What clients say{' '}
            <em style={{ fontStyle: 'italic', color: '#6B6B70' }}>after we deliver.</em>
          </h2>
        </motion.div>

        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="card" style={{ padding: '56px 48px', minHeight: 260, position: 'relative', overflow: 'hidden' }}>

            {/* Large quote mark */}
            <div style={{ position: 'absolute', top: 32, right: 48, fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '8rem', color: '#1E1E22', lineHeight: 1, userSelect: 'none' }}>
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={cur}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <blockquote style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(1.05rem, 2vw, 1.4rem)', color: '#EDEAE4', lineHeight: 1.6, marginBottom: 36, maxWidth: '85%' }}>
                  "{testimonials[cur].quote}"
                </blockquote>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#1E1E22', border: '1px solid #242428', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#6B6B70' }}>
                    {testimonials[cur].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#EDEAE4' }}>{testimonials[cur].name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6B6B70', marginTop: 2 }}>{testimonials[cur].role}, {testimonials[cur].company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
            <button onClick={() => go(-1)} aria-label="Previous"
              style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #242428', background: 'transparent', color: '#6B6B70', cursor: 'pointer', fontSize: '0.875rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.borderColor = '#6B6B70'; e.target.style.color = '#EDEAE4' }}
              onMouseLeave={e => { e.target.style.borderColor = '#242428'; e.target.style.color = '#6B6B70' }}
            >←</button>
            <button onClick={() => go(1)} aria-label="Next"
              style={{ width: 40, height: 40, borderRadius: '50%', border: '1px solid #242428', background: 'transparent', color: '#6B6B70', cursor: 'pointer', fontSize: '0.875rem', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.borderColor = '#6B6B70'; e.target.style.color = '#EDEAE4' }}
              onMouseLeave={e => { e.target.style.borderColor = '#242428'; e.target.style.color = '#6B6B70' }}
            >→</button>
            <div style={{ display: 'flex', gap: 8, marginLeft: 8 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setCur(i); setPaused(true) }} aria-label={`Review ${i + 1}`}
                  style={{ border: 'none', cursor: 'pointer', borderRadius: 100, background: i === cur ? '#E5FF3D' : '#242428', width: i === cur ? 24 : 8, height: 8, transition: 'all 0.3s' }}
                />
              ))}
            </div>
            <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: '#6B6B70', fontVariantNumeric: 'tabular-nums' }}>
              {String(cur + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
