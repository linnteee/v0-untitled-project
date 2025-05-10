"use client"

import { useEffect, useRef } from "react"
import "../styles/Portfolio.css"

const Portfolio = () => {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "Lunar Cosmetics",
      category: "branding",
      image: "/placeholder.svg?height=600&width=800",
      description: "Complete brand identity for a luxury skincare line.",
    },
    {
      id: 2,
      title: "Vertex Architecture",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "Responsive website design for an award-winning architecture firm.",
    },
    {
      id: 3,
      title: "Pulse Athletics",
      category: "print",
      image: "/placeholder.svg?height=600&width=800",
      description: "Product packaging and marketing materials for a fitness brand.",
    },
    {
      id: 4,
      title: "Bloom Cafe",
      category: "branding",
      image: "/placeholder.svg?height=600&width=800",
      description: "Brand identity and interior design elements for an organic cafe.",
    },
    {
      id: 5,
      title: "Nomad Travel App",
      category: "web",
      image: "/placeholder.svg?height=600&width=800",
      description: "UI/UX design for a travel planning application.",
    },
    {
      id: 6,
      title: "Echo Music Festival",
      category: "print",
      image: "/placeholder.svg?height=600&width=800",
      description: "Event branding and promotional materials for a music festival.",
    },
  ]

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
    if (gridRef.current) observer.observe(gridRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
      if (gridRef.current) observer.unobserve(gridRef.current)
    }
  }, [])

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="portfolio-container">
        <div className="section-header">
          <h2>
            Our <span className="highlight">Portfolio</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="portfolio-grid" ref={gridRef}>
          {projects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
