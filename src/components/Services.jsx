"use client"

import { useEffect, useRef } from "react"
import "../styles/Services.css"

const Services = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)

      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  const services = [
    {
      icon: "✏️",
      title: "Brand Identity",
      description:
        "We create cohesive visual identities that tell your brand story through logos, color palettes, typography, and more.",
    },
    {
      icon: "🖥️",
      title: "Web Design",
      description:
        "Custom websites that are not only visually stunning but also functional, responsive, and optimized for conversion.",
    },
    {
      icon: "📱",
      title: "Social Media",
      description:
        "Eye-catching social media assets that build brand recognition and engage your audience across platforms.",
    },
    {
      icon: "📸",
      title: "Photography",
      description: "Professional product and brand photography that showcases your offerings in their best light.",
    },
    {
      icon: "🎬",
      title: "Video Production",
      description: "Compelling video content that tells your story and connects with viewers on an emotional level.",
    },
    {
      icon: "📊",
      title: "Marketing Collateral",
      description: "From business cards to brochures, we design print materials that make a lasting impression.",
    },
  ]

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-container">
        <div className="section-header">
          <h2>
            Our <span className="highlight">Services</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-decoration"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
