function AboutSection({ content }) {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="about-grid">
        {content.points.map((point) => (
          <p key={point}>{point}</p>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
