function TestimonialsSection({ content }) {
  return (
    <section className="section section-muted" id="testimonials">
      <div className="section-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
      </div>
      <div className="testimonial-grid">
        {content.items.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <p>"{item.quote}"</p>
            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
