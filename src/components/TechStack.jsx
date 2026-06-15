import { motion } from 'motion/react'
import { techStack } from '../data/techStack'

export default function TechStack() {
  return (
    <section id="stack" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="label" style={{ marginBottom: 16 }}>Tech Stack</div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#EDEAE4', lineHeight: 1.1 }}>
            Tools we master.{' '}
            <em style={{ fontStyle: 'italic', color: '#6B6B70' }}>Not just know.</em>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {techStack.map((group, i) => (
            <motion.div key={group.category}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, padding: '28px 0', borderBottom: '1px solid #1E1E21', alignItems: 'center' }}
            >
              <div style={{ fontSize: '0.7rem', color: '#6B6B70', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{group.category}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {group.items.map(item => (
                  <span key={item}
                    style={{ fontSize: '0.85rem', color: '#EDEAE4', border: '1px solid #242428', padding: '8px 18px', borderRadius: 100, cursor: 'default', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.target.style.borderColor = 'rgba(229,255,61,0.3)'; e.target.style.color = '#E5FF3D' }}
                    onMouseLeave={e => { e.target.style.borderColor = '#242428'; e.target.style.color = '#EDEAE4' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
