import ShapeGrid from './ShapeGrid'
import TrueFocus from './TrueFocus'

function HeroSection({ language }) {
  const displayName = language === 'en' ? 'shahd majid' : 'شهد ماجد'

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-bg" aria-hidden="true">
        <ShapeGrid
          direction="right"
          speed={0.65}
          borderColor="rgba(24, 20, 14, 0.55)"
          squareSize={28}
          hoverFillColor="#22C55E"
        />
      </div>
      <div className="hero-center-name">
        <TrueFocus
          sentence={displayName}
          separator=" "
          blurAmount={5}
          borderColor="#312E81"
          glowColor="rgba(49, 46, 129, 0.65)"
          animationDuration={0.45}
          pauseBetweenAnimations={1}
        />
      </div>
    </section>
  )
}

export default HeroSection
