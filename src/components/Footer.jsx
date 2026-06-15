export default function Footer() {
  const links = ['Work', 'About', 'Team', 'Services', 'Contact']
  return (
    <footer style={{ borderTop: '1px solid #1E1E21', padding: '40px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '1.05rem', color: '#EDEAE4' }}>NexaStack</span>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#E5FF3D', display: 'inline-block' }} />
          <span style={{ fontSize: '0.75rem', color: '#6B6B70', marginLeft: 8 }}>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <nav style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
          {links.map(l => (
            <button key={l} onClick={() => document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', color: '#6B6B70', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#EDEAE4'} onMouseLeave={e => e.target.style.color = '#6B6B70'}
            >{l}</button>
          ))}
        </nav>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'none', border: '1px solid #242428', cursor: 'pointer', fontSize: '0.75rem', color: '#6B6B70', padding: '8px 18px', borderRadius: 100, transition: 'all 0.2s' }}
          onMouseEnter={e => { e.target.style.color = '#EDEAE4'; e.target.style.borderColor = '#6B6B70' }}
          onMouseLeave={e => { e.target.style.color = '#6B6B70'; e.target.style.borderColor = '#242428' }}
        >Back to top ↑</button>
      </div>
    </footer>
  )
}
