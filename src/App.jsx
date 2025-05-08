"use client"

import { useState, useEffect, useRef } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true)
  const appRef = useRef(null)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="app" ref={appRef}>
          <Cursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
