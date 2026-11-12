import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { EASE } from './motion'

/**
 * Project card. On hover the image flips to reveal a blue info panel
 * (design note: "image flips to show info and cursor into show more").
 */
export default function WorkCard({ project, index }) {
  const [flipped, setFlipped] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Gentle column-offset parallax (odd column drifts a little more) — Orchard-style.
  const y = useTransform(scrollYProgress, [0, 1], index % 2 ? [40, -40] : [16, -16])

  const inner = (
    <>
      <div className="card-media" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
        <motion.div
          className="card-flip"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="card-face card-front">
            <img src={project.cover} alt={project.title} loading="lazy" decoding="async" />
          </div>
          <div className="card-face card-back">
            <div className="card-back-info">
              <p>{project.blurb}</p>
              {!project.available && <span className="card-soon">Case study coming soon</span>}
            </div>
            <div className="card-back-img">
              <img src={project.back ?? project.cover} alt="" loading="lazy" decoding="async" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="card-meta">
        <span className="card-title">{project.title}</span>
        <span className="card-cat">{project.category}</span>
      </div>
    </>
  )

  return (
    <motion.article ref={ref} className="work-card" style={{ y }}>
      <motion.div
        initial={{ opacity: 0, y: 70, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: EASE, delay: (index % 2) * 0.12 }}
      >
      {project.available ? (
        <Link to={`/work/${project.slug}`} data-cursor="SHOW MORE" data-cursor-variant="circle" aria-label={`${project.title} — view project`}>
          {inner}
        </Link>
      ) : (
        <div data-cursor="SOON" data-cursor-variant="circle">{inner}</div>
      )}
      </motion.div>
    </motion.article>
  )
}
