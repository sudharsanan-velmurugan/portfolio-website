import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { motion } from 'motion/react'

const inputStyle = {
  width: '100%', background: '#161618', border: '1px solid #242428',
  borderRadius: 12, padding: '14px 18px', color: '#EDEAE4',
  fontSize: '0.875rem', outline: 'none', transition: 'border-color 0.2s',
  fontFamily: 'Inter, system-ui, sans-serif',
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const [sent, setSent] = useState(false)

  const onSubmit = (data) => {
    const s = encodeURIComponent(`Enquiry from ${data.name}`)
    const b = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)
    window.open(`mailto:sudharsananvelmurugan@gmail.com?subject=${s}&body=${b}`)
    setSent(true); reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
        >
          <div className="label" style={{ marginBottom: 16 }}>Contact</div>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#EDEAE4', lineHeight: 1.1 }}>
            Let's build something great.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }} className="contact-grid">

          {/* Left info */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 32 }}
          >
            <p style={{ fontSize: '1rem', color: '#6B6B70', lineHeight: 1.8 }}>
              Whether you need a full product team or specialist support on a running project — we're available for select engagements.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: 'Email', val: 'sudharsananvelmurugan@gmail.com', href: 'mailto:sudharsananvelmurugan@gmail.com' },
                { label: 'Availability', val: 'Remote · Worldwide · Open to projects 2026' },
              ].map(item => (
                <div key={item.label} className="card" style={{ padding: '20px 24px' }}>
                  <div style={{ fontSize: '0.65rem', color: '#6B6B70', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontSize: '0.875rem', color: '#EDEAE4', textDecoration: 'none' }}>{item.val}</a>
                    : <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#E5FF3D', display: 'inline-block' }} className="animate-pulse" />
                        <span style={{ fontSize: '0.875rem', color: '#EDEAE4' }}>{item.val}</span>
                      </div>
                  }
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              {['LinkedIn ↗', 'GitHub ↗'].map(l => (
                <a key={l} href="#" style={{ fontSize: '0.85rem', color: '#6B6B70', textDecoration: 'none', border: '1px solid #242428', padding: '10px 20px', borderRadius: 100, transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.target.style.color = '#EDEAE4'; e.target.style.borderColor = '#6B6B70' }}
                  onMouseLeave={e => { e.target.style.color = '#6B6B70'; e.target.style.borderColor = '#242428' }}
                >{l}</a>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }}>
            {sent ? (
              <div className="card" style={{ padding: '48px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minHeight: 320, justifyContent: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(229,255,61,0.1)', color: '#E5FF3D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>✓</div>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '1.4rem', color: '#EDEAE4' }}>Message sent!</div>
                <div style={{ fontSize: '0.875rem', color: '#6B6B70' }}>We'll get back to you within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 16 }} noValidate>
                {[
                  { name: 'name', type: 'text', placeholder: 'Your name', rules: { required: 'Name is required' } },
                  { name: 'email', type: 'email', placeholder: 'Your email', rules: { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } } },
                ].map(f => (
                  <div key={f.name}>
                    <input type={f.type} placeholder={f.placeholder} {...register(f.name, f.rules)}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(229,255,61,0.3)'}
                      onBlur={e => e.target.style.borderColor = '#242428'}
                    />
                    {errors[f.name] && <p style={{ fontSize: '0.75rem', color: '#f87171', marginTop: 6 }}>{errors[f.name].message}</p>}
                  </div>
                ))}
                <div>
                  <textarea rows={5} placeholder="Tell us about your project..."
                    {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Please add more detail' } })}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(229,255,61,0.3)'}
                    onBlur={e => e.target.style.borderColor = '#242428'}
                  />
                  {errors.message && <p style={{ fontSize: '0.75rem', color: '#f87171', marginTop: 6 }}>{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting}
                  style={{ background: '#E5FF3D', color: '#0D0D0F', fontWeight: 600, fontSize: '0.875rem', padding: '15px', borderRadius: 100, border: 'none', cursor: 'pointer', transition: 'background 0.2s', marginTop: 4 }}
                  onMouseEnter={e => e.target.style.background = '#F4F2ED'}
                  onMouseLeave={e => e.target.style.background = '#E5FF3D'}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
