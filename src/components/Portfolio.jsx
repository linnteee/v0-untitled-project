"use client"

import { useState, useEffect, useRef } from "react"
import "../styles/Portfolio.css"

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [projects, setProjects] = useState([])
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  const allProjects = [
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
    setProjects(allProjects)

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

  useEffect(() => {
    if (activeCategory === "all") {
      setProjects(allProjects)
    } else {
      setProjects(allProjects.filter((project) => project.category === activeCategory))
    }

    if (gridRef.current) {
      gridRef.current.classList.remove("in-view")
      setTimeout(() => {
        gridRef.current.classList.add("in-view")
      }, 50)
    }
  }, [activeCategory])

  return (
    <section id="portfolio" className="portfolio" ref={sectionRef}>
      <div className="portfolio-container">
        <div className="section-header">
          <h2>
            Our <span className="highlight">Portfolio</span>
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="portfolio-filter">
          <button className={activeCategory === "all" ? "active" : ""} onClick={() => setActiveCategory("all")}>
            All
          </button>
          <button
            className={activeCategory === "branding" ? "active" : ""}
            onClick={() => setActiveCategory("branding")}
          >
            Branding
          </button>
          <button className={activeCategory === "web" ? "active" : ""} onClick={() => setActiveCategory("web")}>
            Web Design
          </button>
          <button className={activeCategory === "print" ? "active" : ""} onClick={() => setActiveCategory("print")}>
            Print
          </button>
        </div>

        <div className="portfolio-grid" ref={gridRef}>
          {projects.map((project) => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="portfolio-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="btn-view">View Project</button>
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
