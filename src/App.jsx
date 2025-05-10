"use client"

import { useRef } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"

function App() {
  const appRef = useRef(null)

  return (
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
  )
}

export default App
