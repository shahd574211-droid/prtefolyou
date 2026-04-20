function ServicesSection({ content }) {
  return (
    <section className="section section-muted" id="services">
      <div className="section-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="service-grid">
        {content.items.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>
              <strong>{content.labels.problem}:</strong> {service.problem}
            </p>
            <p>
              <strong>{content.labels.solution}:</strong> {service.solution}
            </p>
            <p>
              <strong>{content.labels.outcome}:</strong> {service.outcome}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
