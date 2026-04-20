import ElectricBorder from './ElectricBorder'

function PortfolioSection({ content }) {
  return (
    <section className="section" id="portfolio">
      <div className="section-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="portfolio-grid">
        {content.items.map((project) => (
          <ElectricBorder
            key={project.name}
            color="#FBB117"
            speed={0.7}
            chaos={0.08}
            borderRadius={14}
            className="project-border-wrap"
          >
            <article className="project-card">
              <img src={project.image} alt={project.name} loading="lazy" />
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="project-tech">{project.technologies.join(' • ')}</p>
                <p className="project-result">{project.result}</p>
              </div>
            </article>
          </ElectricBorder>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
