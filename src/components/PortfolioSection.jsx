import { useRef } from 'react'
import MagicCard, { MagicSpotlight } from './MagicCard'

function getRatingBars(rating) {
  const score = Math.max(1, Math.min(5, Number(rating) || 5))
  const five = Math.min(100, Math.round(40 + score * 11))
  const four = Math.min(96, Math.max(22, five - 26))
  const three = Math.max(10, four - 28)
  const two = Math.max(6, three - 20)
  const one = Math.max(4, two - 8)
  return { five, four, three, two, one }
}

function PortfolioSection({ content }) {
  const sectionRef = useRef(null)
  const isArabic = /[\u0600-\u06FF]/.test(content.title)
  const largeCardExtraText = isArabic
    ? 'تنفيذ ثابت، تجربة واضحة، وتدفق استخدام عملي ومتوازن.'
    : 'Stable execution, clear UX, and practical workflow consistency.'

  return (
    <section className="section portfolio-section-magic" id="portfolio" ref={sectionRef}>
      <MagicSpotlight containerRef={sectionRef} glowColor="132, 0, 255" />
      <div className="section-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="bento-section">
        <div className="bento-grid">
          {content.items.map((project, index) => {
            const isLargeCard = index % 6 === 2 || index % 6 === 3
            const ratingBars = getRatingBars(project.rating)

            return (
            <MagicCard
              key={project.name}
              className={`bento-project-card ${isLargeCard ? 'bento-project-card-large' : ''}`}
              enableTilt={false}
              enableMagnetism
              clickEffect
            >
              <div className="bento-card-image-wrap">
                <img className="bento-card-image" src={project.image} alt={project.name} loading="lazy" />
              </div>
              <div className="bento-card-content">
                <h3 className="bento-card-title">{project.name}</h3>
                <p className="bento-card-description">{project.description}</p>
                {isLargeCard && (
                  <>
                    <p className="bento-card-extra">{largeCardExtraText}</p>
                    <div className="bento-rating-panel" aria-label={`Project rating ${(project.rating ?? 5).toFixed(1)}`}>
                      <div className="bento-rating-summary">
                        <p className="bento-rating-value">{(project.rating ?? 5).toFixed(1)}</p>
                        <p className="bento-rating-stars">★★★★★</p>
                        <p className="bento-rating-count">Verified project quality</p>
                      </div>
                      <div className="bento-rating-bars">
                        {[
                          { label: '5', width: ratingBars.five },
                          { label: '4', width: ratingBars.four },
                          { label: '3', width: ratingBars.three },
                          { label: '2', width: ratingBars.two },
                          { label: '1', width: ratingBars.one },
                        ].map((bar) => (
                          <div key={`${project.name}-bar-${bar.label}`} className="bento-rating-row">
                            <span className="bento-rating-row-label">{bar.label}</span>
                            <span className="bento-rating-row-track">
                              <span className="bento-rating-row-fill" style={{ width: `${bar.width}%` }} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="bento-card-result">{project.result}</p>
                    {!!project.technologies?.length && (
                      <div className="bento-card-tags">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={`${project.name}-${tech}`} className="bento-card-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}
                {project.liveUrl && (
                  <a className="bento-card-link" href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                    {content.liveDemoLabel} ↗
                  </a>
                )}
              </div>
            </MagicCard>
          )})}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
