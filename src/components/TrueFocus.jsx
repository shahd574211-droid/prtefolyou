import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'motion/react'

function TrueFocus({
  sentence = 'True Focus',
  separator = ' ',
  blurAmount = 5,
  borderColor = '#0a6f2f',
  glowColor = 'rgba(34, 197, 94, 0.45)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) {
  const words = useMemo(() => sentence.split(separator).filter(Boolean), [sentence, separator])
  const isArabic = useMemo(() => /[\u0600-\u06FF]/.test(sentence), [sentence])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 })
  const containerRef = useRef(null)
  const wordRefs = useRef([])

  useEffect(() => {
    if (words.length <= 1) return undefined
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, (animationDuration + pauseBetweenAnimations) * 1000)
    return () => window.clearInterval(interval)
  }, [animationDuration, pauseBetweenAnimations, words.length])

  useEffect(() => {
    if (!containerRef.current || !wordRefs.current[currentIndex]) return
    const parentRect = containerRef.current.getBoundingClientRect()
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect()

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    })
  }, [currentIndex, words.length, sentence])

  return (
    <div className="true-focus" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex
        return (
          <span
            key={`${word}-${index}`}
            ref={(el) => {
              wordRefs.current[index] = el
            }}
            className={`true-focus-word ${isArabic ? 'true-focus-word-ar' : ''}`}
            style={{
              filter: isActive ? 'blur(0px)' : `blur(${blurAmount}px)`,
              transition: `filter ${animationDuration}s ease`,
            }}
          >
            {word}
          </span>
        )
      })}

      <motion.div
        className="true-focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: words.length ? 1 : 0,
        }}
        transition={{ duration: animationDuration }}
        style={{
          '--focus-border': borderColor,
          '--focus-glow': glowColor,
        }}
      >
        <span className="focus-corner top-left" />
        <span className="focus-corner top-right" />
        <span className="focus-corner bottom-left" />
        <span className="focus-corner bottom-right" />
      </motion.div>
    </div>
  )
}

export default TrueFocus
