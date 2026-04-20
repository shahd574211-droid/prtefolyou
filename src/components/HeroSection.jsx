function HeroSection({ content }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="hero-subtitle">{content.subtitle}</p>
      </div>
    </section>
  )
}

export default HeroSection
