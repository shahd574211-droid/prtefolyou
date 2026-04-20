import { useEffect, useRef } from 'react'

function SplashName({ name, compact = false }) {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    let animationId = 0
    let hue = 42
    const particles = []
    let mouse = { x: canvas.width / 2, y: canvas.height / 2, moving: false }

    const resize = () => {
      const rect = wrapper.getBoundingClientRect()
      canvas.width = Math.max(compact ? 140 : 320, Math.floor(rect.width))
      canvas.height = Math.max(compact ? 44 : 110, Math.floor(rect.height))
      mouse = { x: canvas.width / 2, y: canvas.height / 2, moving: false }
    }

    const addParticle = (x, y) => {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * (compact ? 0.6 : 1.3),
        vy: (Math.random() - 0.5) * (compact ? 0.6 : 1.3),
        life: 1,
        size: compact ? 3 + Math.random() * 5 : 8 + Math.random() * 12,
      })
      if (particles.length > (compact ? 42 : 90)) particles.shift()
    }

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      mouse = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        moving: true,
      }
      addParticle(mouse.x, mouse.y)
    }

    const onPointerLeave = () => {
      mouse.moving = false
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, compact ? 'rgba(255, 218, 94, 0.18)' : 'rgba(255, 218, 94, 0.28)')
      gradient.addColorStop(1, compact ? 'rgba(255, 238, 176, 0.14)' : 'rgba(255, 238, 176, 0.22)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life -= 0.012
        particle.size *= 0.985

        if (particle.life <= 0.02 || particle.size < 0.6) {
          particles.splice(index, 1)
          return
        }

        const alpha = Math.max(0, particle.life)
        const particleHue = 42 + ((hue + index * 3) % 26)
        const color = `hsla(${particleHue}, 96%, 58%, ${alpha})`
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      if (!mouse.moving) {
        addParticle(
          canvas.width / 2 + Math.sin(hue * 0.03) * (compact ? 12 : 34),
          canvas.height / 2,
        )
      }

      hue = (hue + 1) % 360
      animationId = window.requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)

    return () => {
      window.cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <div ref={wrapperRef} className={`name-splash ${compact ? 'name-splash-compact' : ''}`}>
      <canvas ref={canvasRef} className="name-splash-canvas" />
      <h2 className="name-splash-text">{name}</h2>
    </div>
  )
}

export default SplashName
