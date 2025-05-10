"use client"

import { useEffect, useRef } from "react"
import "../styles/Contact.css"

const Contact = () => {
  const sectionRef = useRef(null)
  const infoRef = useRef(null)

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
    if (infoRef.current) observer.observe(infoRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (infoRef.current) observer.unobserve(infoRef.current)
    }
  }, [])

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className="section-header">
          <h2>
            Get In <span className="highlight">Touch</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content-centered">
          <div className="contact-info" ref={infoRef}>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Our Location</h3>
                <p>6 Lokko Road, Osu, Accra, Ghana</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:kre8tiv@thinkkre8tiv.com">kre8tiv@thinkkre8tiv.com</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h3>Call Us</h3>
                <p>+233 244 681 391</p>
              </div>
            </div>

            <div className="social-links-container">
              <h3>Connect With Us</h3>
              <div className="social-links">
                <a
                  href="https://wa.me/233244681391"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link whatsapp"
                >
                  <span className="social-icon">📱</span>
                  <span className="social-name">WhatsApp</span>
                </a>
                <a
                  href="https://instagram.com/thinkkre8tiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                >
                  <span className="social-icon">📸</span>
                  <span className="social-name">Instagram</span>
                </a>
                <a
                  href="https://tiktok.com/@thinkkre8tivmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link tiktok"
                >
                  <span className="social-icon">🎵</span>
                  <span className="social-name">TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
