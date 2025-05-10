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
      icon: "🖨️",
      title: "DTF Printing",
      description:
        "High-quality Direct-to-Film printing for vibrant, durable designs on various fabrics and materials.",
    },
    {
      icon: "🧵",
      title: "Embroidery",
      description:
        "Custom embroidery services for apparel, accessories, and promotional items with precision and attention to detail.",
    },
    {
      icon: "🎁",
      title: "Souvenirs",
      description:
        "Memorable custom souvenirs and promotional items that make a lasting impression for your brand or event.",
    },
    {
      icon: "🎪",
      title: "Event Branding",
      description:
        "Comprehensive branding solutions for events, from concept to execution, creating cohesive visual experiences.",
    },
    {
      icon: "✏️",
      title: "Brand Identity",
      description:
        "We create cohesive visual identities that tell your brand story through logos, color palettes, typography, and more.",
    },
    {
      icon: "📱",
      title: "Social Media",
      description:
        "Eye-catching social media assets that build brand recognition and engage your audience across platforms.",
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
