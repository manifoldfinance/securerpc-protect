"use client"

import { useEffect, useRef } from "react"

interface Block {
  type: "normal" | "victim" | "attacker"
  label: string
}

interface Strategy {
  symbol: string
  blocks: Block[]
}

const strategies: Strategy[] = [
  {
    symbol: "α",
    blocks: [
      { type: "normal", label: "T₁" },
      { type: "victim", label: "Tᵥ" },
      { type: "normal", label: "T₂" },
      { type: "normal", label: "T₃" },
    ],
  },
  {
    symbol: "β",
    blocks: [
      { type: "normal", label: "T₁" },
      { type: "attacker", label: "Tₐ" },
      { type: "victim", label: "Tᵥ" },
      { type: "normal", label: "T₂" },
      { type: "normal", label: "T₃" },
    ],
  },
  {
    symbol: "γ",
    blocks: [
      { type: "normal", label: "T₁" },
      { type: "victim", label: "Tᵥ" },
      { type: "attacker", label: "Tₐ" },
      { type: "normal", label: "T₂" },
      { type: "normal", label: "T₃" },
    ],
  },
  {
    symbol: "δ",
    blocks: [
      { type: "normal", label: "T₁" },
      { type: "victim", label: "Tᵥ" },
      { type: "attacker", label: "Tₐ" },
      { type: "normal", label: "T₂" },
      { type: "normal", label: "T₃" },
    ],
  },
  {
    symbol: "ε",
    blocks: [
      { type: "normal", label: "T₁" },
      { type: "attacker", label: "Tₐ₁" },
      { type: "victim", label: "Tᵥ" },
      { type: "attacker", label: "Tₐ₂" },
      { type: "normal", label: "T₂" },
      { type: "normal", label: "T₃" },
    ],
  },
]

export function ExtractionStrategiesVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const scale = window.devicePixelRatio
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * scale
      canvas.height = rect.height * scale
      ctx.scale(scale, scale)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const width = canvas.width / window.devicePixelRatio
    const height = canvas.height / window.devicePixelRatio

    const blockWidth = Math.min(60, width / 8)
    const blockHeight = Math.min(30, height / 12)
    const blockSpacing = Math.min(8, height / 50)
    const strategySpacing = Math.min(120, width / 5)
    const startX = Math.max(80, width / 8)
    const startY = Math.max(80, height / 6)

    const getBlockColor = (type: Block["type"]) => {
      switch (type) {
        case "victim":
          return "#3b82f6" // Blue
        case "attacker":
          return "#ef4444" // Red
        default:
          return "#4b5563" // Gray
      }
    }

    const drawBlock = (x: number, y: number, block: Block, pulseFactor: number = 1) => {
      ctx.strokeStyle = getBlockColor(block.type)
      ctx.lineWidth = 1.5

      if (block.type === "victim" || block.type === "attacker") {
        ctx.lineWidth = 1.5 + pulseFactor
      }

      ctx.beginPath()
      ctx.roundRect(x, y, blockWidth, blockHeight, 3)
      ctx.stroke()

      ctx.fillStyle = "#fff"
      ctx.font = "14px monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(block.label, x + blockWidth / 2, y + blockHeight / 2)
    }

    const drawStrategy = (strategy: Strategy, x: number, y: number, pulseFactor: number) => {
      ctx.fillStyle = "#fff"
      ctx.font = "bold 18px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(strategy.symbol, x + blockWidth / 2, y - 20)

      strategy.blocks.forEach((block, index) => {
        drawBlock(x, y + index * (blockHeight + blockSpacing), block, pulseFactor)
      })
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      ctx.strokeStyle = "#666"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(40, startY)
      ctx.lineTo(40, height - 40)
      ctx.stroke()

      ctx.save()
      ctx.translate(60, height / 2)
      ctx.rotate(-Math.PI / 2)
      ctx.fillStyle = "#666"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText("Execution Order", 0, 0)
      ctx.restore()

      const pulseFactor = Math.sin(time / 300) * 0.5 + 0.5 // Pulsating effect
      strategies.forEach((strategy, index) => {
        drawStrategy(strategy, startX + index * strategySpacing, startY, pulseFactor)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
