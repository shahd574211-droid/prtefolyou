function SkillsSection({ content }) {
  return (
    <section className="section section-muted" id="skills">
      <div className="section-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="skills-grid">
        {content.categories.map((category) => (
          <article className="skill-card" key={category.name}>
            <h3>{category.name}</h3>
            <div className="tag-list">
              {category.items.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
