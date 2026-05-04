import { useEffect, useRef } from 'react'

function ShapeGrid({
  direction = 'right',
  speed = 0.65,
  borderColor = 'rgba(24, 20, 14, 0.55)',
  squareSize = 28,
  hoverFillColor = '#22C55E',
}) {
  const canvasRef = useRef(null)
  const requestRef = useRef(null)
  const gridOffset = useRef({ x: 0, y: 0 })
  const hoveredCell = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const hexHoriz = squareSize * 1.5
    const hexVert = squareSize * Math.sqrt(3)

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const drawHex = (cx, cy, size) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i += 1) {
        const angle = (Math.PI / 3) * i
        const vx = cx + size * Math.cos(angle)
        const vy = cy + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(vx, vy)
        else ctx.lineTo(vx, vy)
      }
      ctx.closePath()
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.lineWidth = 1.25

      const colShift = Math.floor(gridOffset.current.x / hexHoriz)
      const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz
      const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert
      const cols = Math.ceil(canvas.width / hexHoriz) + 3
      const rows = Math.ceil(canvas.height / hexVert) + 3

      for (let col = -2; col < cols; col += 1) {
        for (let row = -2; row < rows; row += 1) {
          const cx = col * hexHoriz + offsetX
          const cy = row * hexVert + ((col + colShift) % 2 !== 0 ? hexVert / 2 : 0) + offsetY
          const key = `${col},${row}`

          if (hoveredCell.current === key) {
            drawHex(cx, cy, squareSize)
            ctx.fillStyle = hoverFillColor
            ctx.fill()
          }

          drawHex(cx, cy, squareSize)
          ctx.strokeStyle = borderColor
          ctx.stroke()
        }
      }
    }

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1)
      const wrapX = hexHoriz * 2
      const wrapY = hexVert

      if (direction === 'right') {
        gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX
      } else if (direction === 'left') {
        gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + wrapX) % wrapX
      } else if (direction === 'up') {
        gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + wrapY) % wrapY
      } else if (direction === 'down') {
        gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY
      } else if (direction === 'diagonal') {
        gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + wrapX) % wrapX
        gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + wrapY) % wrapY
      }

      drawGrid()
      requestRef.current = window.requestAnimationFrame(updateAnimation)
    }

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      if (mouseX < 0 || mouseY < 0 || mouseX > rect.width || mouseY > rect.height) {
        hoveredCell.current = null
        return
      }

      const colShift = Math.floor(gridOffset.current.x / hexHoriz)
      const offsetX = ((gridOffset.current.x % hexHoriz) + hexHoriz) % hexHoriz
      const offsetY = ((gridOffset.current.y % hexVert) + hexVert) % hexVert
      const adjustedX = mouseX - offsetX
      const adjustedY = mouseY - offsetY
      const col = Math.round(adjustedX / hexHoriz)
      const rowOffset = (col + colShift) % 2 !== 0 ? hexVert / 2 : 0
      const row = Math.round((adjustedY - rowOffset) / hexVert)
      hoveredCell.current = `${col},${row}`
    }

    const handleMouseLeave = () => {
      hoveredCell.current = null
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    resizeCanvas()
    requestRef.current = window.requestAnimationFrame(updateAnimation)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (requestRef.current) window.cancelAnimationFrame(requestRef.current)
    }
  }, [borderColor, direction, hoverFillColor, speed, squareSize])

  return <canvas ref={canvasRef} className="shape-grid-canvas" />
}

export default ShapeGrid
