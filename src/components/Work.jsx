import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { projects } from '../data/projects'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="card" style={{ overflow: 'hidden', transition: 'border-color 0.3s' }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#38383e'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#242428'}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="project-grid">

          {/* Image half */}
          <div style={{ overflow: 'hidden', minHeight: 300 }}>
            <motion.div
              className={`bg-gradient-to-br ${project.gradient}`}
              style={{ y: imgY, height: '110%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                {project.title}
              </span>
            </motion.div>
          </div>

          {/* Text half */}
          <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '2.5rem', color: '#242428', lineHeight: 1 }}>
                  {project.id}
                </span>
                <div style={{ width: 1, height: 32, background: '#242428' }} />
                <span style={{ fontSize: '0.7rem', color: '#6B6B70', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{project.year}</span>
              </div>

              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '1.8rem', color: '#EDEAE4', lineHeight: 1.1, marginBottom: 8 }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#6B6B70', marginBottom: 20 }}>{project.subtitle}</p>
              <p style={{ fontSize: '0.875rem', color: '#9A9A9F', lineHeight: 1.7 }}>{project.description}</p>
            </div>

            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {project.tags.map(t => (
                  <span key={t} style={{ fontSize: '0.7rem', color: '#6B6B70', border: '1px solid #242428', padding: '4px 12px', borderRadius: 100 }}>{t}</span>
                ))}
              </div>
              <a href={project.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: '#EDEAE4', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#E5FF3D' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#EDEAE4' }}
              >
                View case study <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Work() {
  return (
    <section id="work" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 64, flexWrap: 'wrap', gap: 20 }}
        >
          <div>
            <div className="label" style={{ marginBottom: 16 }}>Featured Work</div>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#EDEAE4', lineHeight: 1.1 }}>
              Projects that shipped<br />
              <em style={{ fontStyle: 'italic', color: '#6B6B70' }}>and actually performed.</em>
            </h2>
          </div>
          <a href="#" style={{ fontSize: '0.875rem', color: '#6B6B70', textDecoration: 'none', border: '1px solid #242428', padding: '10px 24px', borderRadius: 100, transition: 'all 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#EDEAE4'; e.currentTarget.style.borderColor = '#6B6B70' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#6B6B70'; e.currentTarget.style.borderColor = '#242428' }}
          >
            View all →
          </a>
        </motion.div>

        {/* Cards — generous 32px gap */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
