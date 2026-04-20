import { useEffect, useState } from 'react'
import AboutSection from './components/AboutSection'
import HeroSection from './components/HeroSection'
import PortfolioSection from './components/PortfolioSection'
import SplashName from './components/SplashName'
import { translations } from './data/content'
import './App.css'

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
        <a href="#home" className="brand">
          <SplashName name={content.nav.brand} compact />
        </a>
        <nav>
          <a href="#portfolio">{content.nav.projects}</a>
          <a href="#about">{content.nav.about}</a>
          <button className="language-toggle" onClick={toggleLanguage} type="button">
            <span aria-hidden="true">🌐</span>
            <span>{content.nav.toggle}</span>
          </button>
        </nav>
      </header>
      <main>
        <HeroSection content={content.hero} />
        <PortfolioSection content={content.portfolio} />
        <AboutSection content={content.about} />
      </main>
      <footer className="footer">
        <p>{content.footer.text}</p>
      </footer>
    </div>
  )
}

export default App
