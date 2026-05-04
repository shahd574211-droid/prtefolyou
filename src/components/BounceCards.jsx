import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function BounceCards({
  className = '',
  items = [],
  containerWidth = '100%',
  containerHeight = 430,
  animationDelay = 0.45,
  animationStagger = 0.07,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = ['rotate(-7deg) translate(-190px)', 'rotate(0deg)', 'rotate(7deg) translate(190px)'],
  enableHover = true,
}) {
  const containerRef = useRef(null)
  const featuredIndex = Math.floor(items.length / 2)

  const generatedTransforms = items.map((_, idx) => {
    const center = featuredIndex
    const distance = idx - center
    const spacing = 150
    const x = distance * spacing
    const rotation = distance * 5
    return `rotate(${rotation}deg) translate(${x}px)`
  })

  const activeTransforms =
    transformStyles.length >= items.length ? transformStyles : generatedTransforms

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bounce-card',
        { scale: 0.84, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
          duration: 0.75,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [animationDelay, animationStagger, easeType])

  const getNoRotationTransform = (transformStr) => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr)
    if (hasRotate) return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)')
    if (transformStr === 'none') return 'rotate(0deg)'
    return `${transformStr} rotate(0deg)`
  }

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/
    const match = baseTransform.match(translateRegex)
    if (match) {
      const currentX = parseFloat(match[1])
      return baseTransform.replace(translateRegex, `translate(${currentX + offsetX}px)`)
    }
    return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`
  }

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover || !containerRef.current) return
    const q = gsap.utils.selector(containerRef)

    items.forEach((_, i) => {
      const selector = q(`.bounce-card-${i}`)
      gsap.killTweensOf(selector)
      const baseTransform = activeTransforms[i] || 'none'

      if (i === hoveredIdx) {
        gsap.to(selector, {
          transform: getNoRotationTransform(baseTransform),
          scale: 1.03,
          zIndex: 30,
          opacity: 1,
          duration: 0.35,
          ease: 'back.out(1.4)',
          overwrite: 'auto',
        })
      } else {
        const offsetX = i < hoveredIdx ? -95 : 95
        const distance = Math.abs(hoveredIdx - i)
        gsap.to(selector, {
          transform: getPushedTransform(baseTransform, offsetX),
          opacity: 0.5,
          zIndex: 8,
          duration: 0.35,
          ease: 'back.out(1.35)',
          delay: distance * 0.04,
          overwrite: 'auto',
        })
      }
    })
  }

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return
    const q = gsap.utils.selector(containerRef)

    items.forEach((_, i) => {
      const selector = q(`.bounce-card-${i}`)
      gsap.killTweensOf(selector)
      gsap.to(selector, {
        transform: activeTransforms[i] || 'none',
        scale: 1,
        opacity: 1,
        zIndex: i === featuredIndex ? 20 : 10,
        duration: 0.35,
        ease: 'back.out(1.35)',
        overwrite: 'auto',
      })
    })
  }

  return (
    <div
      className={`bounce-cards-root ${className}`}
      ref={containerRef}
      style={{ width: containerWidth, height: containerHeight }}
    >
      {items.map((item, idx) => (
        <article
          key={item.name}
          className={`bounce-card bounce-card-${idx} social-proof-card ${idx === featuredIndex ? 'social-proof-card-featured' : ''}`}
          style={{ transform: activeTransforms[idx] || 'none', zIndex: idx === featuredIndex ? 20 : 10 }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
          onClick={() => pushSiblings(idx)}
        >
          <div className="social-proof-card-top">
            <div className="social-proof-avatar" aria-hidden="true">
              {item.avatar}
            </div>
            <span className="social-proof-quote-mark" aria-hidden="true">
              “”
            </span>
          </div>
          <p className="social-proof-quote">"{item.quote}"</p>
          <h3>{item.name}</h3>
          <span>{item.role}</span>
        </article>
      ))}
    </div>
  )
}

export default BounceCards
