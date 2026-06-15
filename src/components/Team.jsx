import { motion } from 'motion/react'
import { team } from '../data/team'

export default function Team() {
  return (
    <section id="team" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="label" style={{ marginBottom: 16 }}>The Team</div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#EDEAE4', lineHeight: 1.1 }}>
            Four specialists.{' '}
            <em style={{ fontStyle: 'italic', color: '#6B6B70' }}>One delivery unit.</em>
          </h2>
        </motion.div>

        {/* 4 cards, 24px gap */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="team-grid">
          {team.map((m, i) => (
            <motion.div key={m.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.55 }}
              className="card"
              style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: 20, transition: 'border-color 0.3s', borderColor: m.accentCard ? 'rgba(229,255,61,0.2)' : '#242428' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = m.accentCard ? 'rgba(229,255,61,0.4)' : '#38383e'}
              onMouseLeave={e => e.currentTarget.style.borderColor = m.accentCard ? 'rgba(229,255,61,0.2)' : '#242428'}
            >
              {/* Avatar + badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: m.accentCard ? 'rgba(229,255,61,0.12)' : '#1E1E22',
                  color: m.accentCard ? '#E5FF3D' : '#EDEAE4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '1rem',
                }}>
                  {m.avatar}
                </div>
                {m.accentCard && (
                  <span style={{ fontSize: '0.6rem', color: '#E5FF3D', border: '1px solid rgba(229,255,61,0.3)', padding: '3px 10px', borderRadius: 100 }}>
                    Security Lead
                  </span>
                )}
              </div>

              {/* Name + role */}
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#EDEAE4' }}>{m.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#6B6B70', marginTop: 4, lineHeight: 1.4 }}>{m.role}</div>
              </div>

              {/* Bio */}
              <p style={{ fontSize: '0.8rem', color: '#6B6B70', lineHeight: 1.7, flexGrow: 1 }}>{m.bio}</p>

              {/* Skills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {m.skills.map(s => (
                  <span key={s} style={{
                    fontSize: '0.65rem', padding: '3px 10px', borderRadius: 100,
                    background: m.accentCard ? 'rgba(229,255,61,0.08)' : '#1E1E22',
                    color: m.accentCard ? 'rgba(229,255,61,0.7)' : '#6B6B70',
                  }}>{s}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: 16, paddingTop: 16, borderTop: '1px solid #242428' }}>
                <a href={m.linkedin} style={{ fontSize: '0.75rem', color: '#6B6B70', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#EDEAE4'} onMouseLeave={e => e.target.style.color = '#6B6B70'}>
                  LinkedIn ↗
                </a>
                <a href={m.github} style={{ fontSize: '0.75rem', color: '#6B6B70', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#EDEAE4'} onMouseLeave={e => e.target.style.color = '#6B6B70'}>
                  GitHub ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
