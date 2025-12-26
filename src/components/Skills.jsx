import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiDocker,
  SiGit,
  SiFigma,
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skills = [
    { name: 'React', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Python', icon: SiPython },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'AWS', icon: SiAmazonaws },
    { name: 'Docker', icon: SiDocker },
    { name: 'Git', icon: SiGit },
    { name: 'Figma', icon: SiFigma },
  ]

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="section-frame">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="skills-content"
          >
            <div className="section-header">
              <span className="section-number">[02]</span>
              <h2 className="section-title">SKILLS.DAT</h2>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-icon">
                    <skill.icon />
                  </div>
                  <span className="skill-name">[{skill.name}]</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
