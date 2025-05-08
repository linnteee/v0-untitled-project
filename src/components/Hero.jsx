"use client"

import { useEffect, useRef } from "react"
import "../styles/Hero.css"

const Hero = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const text = textRef.current
    const cta = ctaRef.current

    if (hero && text && cta) {
      hero.classList.add("animate")
      text.classList.add("animate")

      setTimeout(() => {
        cta.classList.add("animate")
      }, 1000)
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20

      if (hero) {
        hero.style.setProperty("--mouse-x", `${x}px`)
        hero.style.setProperty("--mouse-y", `${y}px`)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text" ref={textRef}>
          <h1>
            <span className="line">We Create</span>
            <span className="line">Brands That</span>
            <span className="line highlight">Stand Out</span>
          </h1>
          <p>Transforming ideas into visual masterpieces that captivate and inspire.</p>
        </div>

        <div className="hero-cta" ref={ctaRef}>
          <a href="#portfolio" className="btn btn-primary">
            View Our Work
            <span className="btn-arrow">→</span>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">↓</div>
      </div>
    </section>
  )
}

export default Hero
