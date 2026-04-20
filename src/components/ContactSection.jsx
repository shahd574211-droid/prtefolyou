function ContactSection({ content }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p>{content.subtitle}</p>
      </div>
      <form className="contact-form">
        <label htmlFor="name">{content.name}</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={content.namePlaceholder}
          required
        />

        <label htmlFor="email">{content.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={content.emailPlaceholder}
          required
        />

        <label htmlFor="details">{content.details}</label>
        <textarea
          id="details"
          name="details"
          rows="5"
          placeholder={content.detailsPlaceholder}
          required
        ></textarea>

        <button type="submit" className="btn btn-primary">
          {content.cta}
        </button>
      </form>
    </section>
  )
}

export default ContactSection
