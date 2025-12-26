import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GITHUB' },
    { icon: FaLinkedin, href: '#', label: 'LINKEDIN' },
    { icon: FaTwitter, href: '#', label: 'TWITTER' },
    { icon: FaEnvelope, href: '#contact', label: 'EMAIL' },
  ]

  return (
    <section id="home" className="hero">
      <div className="crt-screen">
        <div className="crt-border">
          <div className="crt-corner top-left"></div>
          <div className="crt-corner top-right"></div>
          <div className="crt-corner bottom-left"></div>
          <div className="crt-corner bottom-right"></div>
        </div>
        
        <div className="hero-container">
          <div className="terminal-header">
            <span className="terminal-title">FRONTEND_DEV.EXE</span>
            <span className="terminal-status">[RUNNING]</span>
          </div>

          <motion.div
            className="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              &gt; FRONTEND
              <br />
              &gt; DEVELOPER
            </motion.h1>

            <motion.div
              className="hero-info"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="info-line">
                <span className="prompt">&gt;&gt;</span>
                <span className="text">Building digital experiences</span>
              </div>
              <div className="info-line">
                <span className="prompt">&gt;&gt;</span>
                <span className="text">React | TypeScript | Modern Web</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="stat-box">
                <div className="stat-value">3+</div>
                <div className="stat-label">YEARS</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">20+</div>
                <div className="stat-label">PROJECTS</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">10+</div>
                <div className="stat-label">TECH</div>
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href="#projects" className="btn-primary">
                [VIEW PROJECTS]
              </a>
              <a href="#contact" className="btn-secondary">
                [CONTACT]
              </a>
            </motion.div>
          </motion.div>

          <div className="hero-social">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="social-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                &gt; {link.label}
              </motion.a>
            ))}
          </div>

          <div className="terminal-footer">
            <span className="cursor-blink">█</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
