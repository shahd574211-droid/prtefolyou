function ExpertiseSection({ content }) {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="expertise-grid">
        <div className="expertise-services">
          {content.items.map((item, index) => (
            <article className="expertise-service-card" key={item.title}>
              <span className={`expertise-service-icon expertise-service-icon-${(index % 4) + 1}`} aria-hidden="true">
                {item.icon}
              </span>
              <div className="expertise-service-body">
                <h3>{item.title}</h3>
              </div>
              <span className="expertise-service-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className="expertise-summary">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2>{content.title}</h2>
          <p className="expertise-description">{content.description}</p>
          <p className="expertise-description">{content.descriptionSecondary}</p>
          <div className="expertise-stats">
            {content.stats.map((stat) => (
              <article className="expertise-stat-card" key={stat.label}>
                <p className="expertise-stat-value">{stat.value}</p>
                <p className="expertise-stat-label">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection
