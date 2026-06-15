import { motion } from 'motion/react'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { n: 12, suf: '+', label: 'Years combined experience' },
  { n: 40, suf: '+', label: 'Products shipped' },
  { n: 4, suf: '', label: 'Core specialists' },
  { n: 8, suf: '+', label: 'Years in cybersecurity' },
]

const process = [
  { n: '01', title: 'Discovery', desc: 'Requirements, threat modelling, architecture scoping.' },
  { n: '02', title: 'Design', desc: 'System design, API contracts, UI wireframes.' },
  { n: '03', title: 'Development', desc: 'Agile sprints, code reviews, daily standups.' },
  { n: '04', title: 'Security Review', desc: 'Secure code review, SAST/DAST, vulnerability fixes.' },
  { n: '05', title: 'CI/CD Deploy', desc: 'Azure Pipelines, Docker, automated test suites.' },
  { n: '06', title: 'Support', desc: 'Monitoring, patches, ongoing feature iterations.' },
]

function StatBox({ n, suf, label, delay }) {
  const { ref, value } = useCounter(n, 1.8)
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.5 }}
      className="card" style={{ padding: '36px 32px', textAlign: 'center' }}
    >
      <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '3.2rem', color: '#EDEAE4', lineHeight: 1 }}>
        {value}{suf}
      </div>
      <div style={{ fontSize: '0.8rem', color: '#6B6B70', marginTop: 10 }}>{label}</div>
    </motion.div>
  )
}

function ProcessCard({ n, title, desc, delay }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.5 }}
      className="card" style={{ padding: '32px 28px' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#38383e'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#242428'}
    >
      <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '2rem', color: '#242428', marginBottom: 20 }}>{n}</div>
      <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#EDEAE4', marginBottom: 10 }}>{title}</div>
      <div style={{ fontSize: '0.825rem', color: '#6B6B70', lineHeight: 1.65 }}>{desc}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', background: '#111113', borderTop: '1px solid #1E1E21', borderBottom: '1px solid #1E1E21' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="label" style={{ marginBottom: 16 }}>About Us</div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#EDEAE4', lineHeight: 1.1 }}>
            Small team.{' '}
            <em style={{ fontStyle: 'italic', color: '#E5FF3D' }}>Big output.</em>
          </h2>
        </motion.div>

        {/* Stats grid — 4 cols, 24px gap */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginBottom: 64 }} className="stats-grid">
          {stats.map((s, i) => <StatBox key={s.label} {...s} delay={i * 0.08} />)}
        </div>

        {/* Philosophy */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 80 }} className="philosophy-grid">
          {[
            'We\'re a lean, senior-weighted team that ships production-grade software on time. No handover nightmares, no security bolt-ons, no black-box CI/CD. Every delivery includes clean code, reviewed by humans, tested in pipelines.',
            'We work remotely, async-first, and integrate into existing teams or operate as a standalone delivery unit. Our security engineer with 8+ years of offensive experience reviews every line before it ships.',
          ].map((text, i) => (
            <motion.p key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
              style={{ fontSize: '0.975rem', color: '#6B6B70', lineHeight: 1.8 }}
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Process — 6 numbered cards, 3-col grid */}
        <div className="label" style={{ marginBottom: 28 }}>How We Work</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="process-grid">
          {process.map((p, i) => <ProcessCard key={p.n} {...p} delay={i * 0.07} />)}
        </div>

      </div>
    </section>
  )
}
