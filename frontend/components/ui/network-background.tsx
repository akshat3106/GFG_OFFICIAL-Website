"use client"

import { useEffect, useRef } from "react"

export function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = canvas.width = window.innerWidth
        let height = canvas.height = window.innerHeight

        const particles: { x: number; y: number; vx: number; vy: number }[] = []
        const particleCount = Math.min(Math.floor((width * height) / 15000), 100)
        const connectionDistance = 150
        const mouseDistance = 200

        let mouse = { x: 0, y: 0 }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5
            })
        }

        const handleResize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        window.addEventListener("resize", handleResize)
        window.addEventListener("mousemove", handleMouseMove)

        let time = 0
        const animate = () => {
            time += 0.05
            ctx.clearRect(0, 0, width, height)

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1
                if (p.y < 0 || p.y > height) p.vy *= -1

                // Mouse interaction
                const dxMouse = p.x - mouse.x
                const dyMouse = p.y - mouse.y
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

                if (distMouse < mouseDistance) {
                    const force = (mouseDistance - distMouse) / mouseDistance
                    const angle = Math.atan2(dyMouse, dxMouse)
                    p.vx += Math.cos(angle) * force * 0.1
                    p.vy += Math.sin(angle) * force * 0.1
                }

                // Friction
                p.vx *= 0.98
                p.vy *= 0.98

                // Pulse Wave Effect
                const wave = Math.sin(time + p.x * 0.01 + p.y * 0.01) * 0.5 + 0.5

                // Draw Particle - Digital Square with Pulse
                ctx.beginPath()
                ctx.rect(p.x, p.y, 2 + wave, 2 + wave)
                ctx.fillStyle = `rgba(34, 197, 94, ${0.3 + (Math.abs(p.vx) + Math.abs(p.vy)) * 0.5 + wave * 0.2})`
                ctx.fill()

                // Draw Connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < connectionDistance) {
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = `rgba(34, 197, 94, ${0.1 * (1 - dist / connectionDistance)})`
                        ctx.stroke()
                    }
                }
            })

            requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none md:pointer-events-auto"
            style={{ zIndex: 0 }}
        />
    )
}
