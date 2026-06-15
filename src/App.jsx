import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Team from './components/Team'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--my', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#0D0D0F' }}>
      <div className="glow-layer" aria-hidden="true" />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Nav />
        <main>
          <Hero />
          <Work />
          <About />
          <Team />
          <Services />
          <TechStack />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
