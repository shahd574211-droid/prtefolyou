import { useEffect, useState } from 'react'
import AboutSection from './components/AboutSection'
import ExpertiseSection from './components/ExpertiseSection'
import HeroSection from './components/HeroSection'
import LogoLoop from './components/LogoLoop'
import PortfolioSection from './components/PortfolioSection'
import SocialProofSection from './components/SocialProofSection'
import WhatsAppContactSection from './components/WhatsAppContactSection'
import { translations } from './data/content'
import './App.css'

const separatorLogos = [
  { src: 'https://cdn.simpleicons.org/react/2f2816', alt: 'React' },
  { src: 'https://cdn.simpleicons.org/nextdotjs/2f2816', alt: 'Next.js' },
  { src: 'https://cdn.simpleicons.org/typescript/2f2816', alt: 'TypeScript' },
  { src: 'https://cdn.simpleicons.org/tailwindcss/2f2816', alt: 'Tailwind CSS' },
  { src: 'https://cdn.simpleicons.org/vercel/2f2816', alt: 'Vercel' },
  { src: 'https://cdn.simpleicons.org/github/2f2816', alt: 'GitHub' },
  { src: 'https://cdn.simpleicons.org/docker/2f2816', alt: 'Docker' },
]

function App() {
  const [language, setLanguage] = useState('ar')
  const content = translations[language]

  useEffect(() => {
    const isArabic = language === 'ar'
    document.documentElement.lang = isArabic ? 'ar' : 'en'
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
  }, [language])

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'ar' ? 'en' : 'ar'))
  }

  return (
    <div className={`site-wrapper ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <header className="topbar">
        <nav>
          <a href="#portfolio">{content.nav.projects}</a>
          <a href="#about">{content.nav.about}</a>
          <a href="#whatsapp">{content.nav.whatsapp}</a>
          <button className="language-toggle" onClick={toggleLanguage} type="button">
            <span aria-hidden="true">🌐</span>
            <span>{content.nav.toggle}</span>
          </button>
        </nav>
      </header>
      <main>
        <HeroSection language={language} />
        <PortfolioSection content={content.portfolio} />
        <section className="logo-divider-section" aria-label="Technology separator">
          <LogoLoop
            logos={separatorLogos}
            speed={95}
            direction="left"
            logoHeight={56}
            gap={42}
            scaleOnHover
            hoverSpeed={50}
            className="logo-divider-loop"
          />
        </section>
        <ExpertiseSection content={content.expertise} />
        <AboutSection content={content.about} />
        <SocialProofSection content={content.socialProof} />
        <WhatsAppContactSection content={content.whatsapp} />
      </main>
      <footer className="footer">
        <p>{content.footer.text}</p>
      </footer>
    </div>
  )
}

export default App
