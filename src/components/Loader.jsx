"use client"

import { useEffect, useState } from "react"
import "../styles/Loader.css"

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-logo">
          <span className="logo-text">
            Think<span className="highlight">Kre8tiv</span>
          </span>
        </div>

        <div className="loader-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-text">{progress}%</div>
        </div>
      </div>
    </div>
  )
}

export default Loader
