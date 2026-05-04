function AboutSection({ content }) {
  return (
    <section className="section about-section-modern" id="about">
      <div className="section-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="about-grid">
        {content.points.map((point, index) => (
          <article className="about-card" key={point}>
            <span className="about-step">{String(index + 1).padStart(2, '0')}</span>
            <p>{point}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
