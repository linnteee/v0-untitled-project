"use client"

import { useEffect, useRef } from "react"
import "../styles/About.css"

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    if (textRef.current) observer.observe(textRef.current)
    if (statsRef.current) observer.observe(statsRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (textRef.current) observer.unobserve(textRef.current)
      if (statsRef.current) observer.unobserve(statsRef.current)
    }
  }, [])

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-header">
          <h2>
            About <span className="highlight">Us</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text" ref={textRef}>
            <h3>
              We're not just designers, we're <span className="highlight">storytellers</span>
            </h3>
            <p>
              At Think Kre8tiv Media, we believe that great branding tells a story. We're a team of passionate creatives
              dedicated to crafting unique visual identities that resonate with your audience and elevate your brand.
            </p>
            <p>
              Founded in 2015, we've helped over 200 businesses transform their visual presence through thoughtful
              design and strategic branding. Our approach combines creativity with purpose, ensuring every element we
              create serves your brand's goals.
            </p>
          </div>

          <div className="about-stats" ref={statsRef}>
            <div className="stat">
              <div className="stat-number">8+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">15</div>
              <div className="stat-label">Design Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
