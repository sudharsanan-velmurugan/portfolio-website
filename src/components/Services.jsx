import { motion } from 'motion/react'
import { services } from '../data/services'

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 0', background: '#111113', borderTop: '1px solid #1E1E21', borderBottom: '1px solid #1E1E21' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <div className="label" style={{ marginBottom: 16 }}>Services</div>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#EDEAE4', lineHeight: 1.1 }}>
              What we build{' '}
              <em style={{ fontStyle: 'italic', color: '#6B6B70' }}>and protect.</em>
            </h2>
          </div>
        </motion.div>

        {/* 3-col grid, 20px gap */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="services-grid">
          {services.map((s, i) => (
            <motion.div key={s.id}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
              className="card"
              style={{
                padding: '32px 28px',
                borderColor: s.differentiator ? 'rgba(229,255,61,0.18)' : '#242428',
                background: s.differentiator ? 'rgba(229,255,61,0.025)' : '#161618',
                transition: 'border-color 0.3s, transform 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = s.differentiator ? 'rgba(229,255,61,0.4)' : '#38383e'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = s.differentiator ? 'rgba(229,255,61,0.18)' : '#242428'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {s.differentiator && (
                <div style={{ fontSize: '0.65rem', color: '#E5FF3D', border: '1px solid rgba(229,255,61,0.25)', display: 'inline-block', padding: '3px 10px', borderRadius: 100, marginBottom: 16 }}>
                  ★ Key differentiator
                </div>
              )}
              <div style={{ fontSize: '1.4rem', marginBottom: 16, color: s.differentiator ? '#E5FF3D' : 'rgba(237,234,228,0.5)' }}>{s.icon}</div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#EDEAE4', marginBottom: 12 }}>{s.title}</div>
              <p style={{ fontSize: '0.825rem', color: '#6B6B70', lineHeight: 1.7 }}>{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
