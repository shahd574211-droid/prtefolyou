import BounceCards from './BounceCards'

function SocialProofSection({ content }) {
  return (
    <section className="section social-proof-section" id="social-proof">
      <div className="section-header social-proof-header">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title}</h2>
        <p className="social-proof-subtitle">{content.subtitle}</p>
      </div>

      <div className="social-proof-stage">
        <BounceCards
          className="social-proof-bounce"
          items={content.testimonials}
          containerHeight={440}
          enableHover
        />
      </div>

      <div className="social-proof-contact">
        <div className="social-proof-contact-copy">
          <h3>{content.contactTitle}</h3>
          <p>{content.contactSubtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
