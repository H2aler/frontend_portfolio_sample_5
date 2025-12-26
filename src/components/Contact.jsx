import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('메시지가 전송되었습니다!')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GITHUB' },
    { icon: FaLinkedin, href: '#', label: 'LINKEDIN' },
    { icon: FaTwitter, href: '#', label: 'TWITTER' },
    { icon: FaEnvelope, href: 'mailto:contact@example.com', label: 'EMAIL' },
  ]

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <div className="section-frame">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="contact-content"
          >
            <div className="section-header">
              <span className="section-number">[04]</span>
              <h2 className="section-title">CONTACT.COM</h2>
            </div>

            <div className="contact-grid">
              <motion.form
                className="contact-form"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="prompt">&gt;</span> NAME:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="ENTER YOUR NAME"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <span className="prompt">&gt;</span> EMAIL:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="YOUR.EMAIL@EXAMPLE.COM"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">
                    <span className="prompt">&gt;</span> MESSAGE:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="ENTER YOUR MESSAGE..."
                  />
                </div>
                <button type="submit" className="submit-btn">
                  [SEND MESSAGE]
                </button>
              </motion.form>

              <motion.div
                className="contact-info"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="info-section">
                  <div className="info-line">
                    <span className="prompt">&gt;&gt;</span>
                    <span className="text">프로젝트나 협업에 대해 이야기하고 싶으시면 연락주세요.</span>
                  </div>
                </div>
                <div className="social-section">
                  <div className="info-line">
                    <span className="prompt">&gt;&gt;</span>
                    <span className="text">CONNECT:</span>
                  </div>
                  <div className="social-links">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        className="social-link"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <span className="prompt">&gt;</span> {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
