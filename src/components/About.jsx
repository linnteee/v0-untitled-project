"use client"

import { useEffect, useRef } from "react"
import "../styles/About.css"

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const missionRef = useRef(null)
  const visionRef = useRef(null)

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
    if (missionRef.current) observer.observe(missionRef.current)
    if (visionRef.current) observer.observe(visionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (textRef.current) observer.unobserve(textRef.current)
      if (missionRef.current) observer.unobserve(missionRef.current)
      if (visionRef.current) observer.unobserve(visionRef.current)
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
            <p>
              Think Kre8tiv Media is a dynamic and innovative branding and print solutions company dedicated to bringing
              your ideas to life with creativity, precision, and speed. Founded by Nii Armah Aryeetey, Think Kre8tiv
              Media has earned a reputation for excellence in general printing, branding, souvenirs, and digitized
              embroidery.
            </p>
            <p>
              We pride ourselves on our fast turnaround times, attention to detail, and commitment to delivering
              high-quality results that exceed expectations. Our production facility is equipped with state-of-the-art
              machinery including a 10-head embroidery machine, UV printer, laser cutter, digital (DTF) and large format
              printers, allowing us to handle both small and large-scale projects with ease.
            </p>
            <p>
              Over the years, we've worked with a diverse range of clients such as Golden Star, Jibu Water, Zenith Bank,
              Omni Bank, Zola Energy, USAID, SEND Ghana, and Water Aid, consistently delivering projects that align with
              their brand vision.
            </p>
            <p>
              At Think Kre8tiv Media, we don't just print — we bring your brand to life. Whether it's branded
              merchandise, corporate gifts, promotional items, or customized apparel, we are your one-stop creative
              partner for impactful brand representation.
            </p>
          </div>

          <div className="about-values">
            <div className="value-card mission" ref={missionRef}>
              <h3>Our Mission</h3>
              <p>
                To deliver innovative, high-quality branding and print solutions that empower businesses and individuals
                to stand out, communicate effectively, and grow their brand presence with confidence.
              </p>
            </div>

            <div className="value-card vision" ref={visionRef}>
              <h3>Our Vision</h3>
              <p>
                To be the leading creative solutions provider in Africa — known for excellence, innovation, and
                reliability in branding and printing services that transform ideas into powerful visual experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="clients-section">
          <h3>Our Clients</h3>
          <div className="clients-list">
            <span className="client-tag">Golden Star</span>
            <span className="client-tag">Jibu Water</span>
            <span className="client-tag">Zenith Bank</span>
            <span className="client-tag">Omni Bank</span>
            <span className="client-tag">Zola Energy</span>
            <span className="client-tag">USAID</span>
            <span className="client-tag">SEND Ghana</span>
            <span className="client-tag">Water Aid</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
