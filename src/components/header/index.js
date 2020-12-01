import React from "react"
import "./header.css"

export default function Header() {
  return (
    <div class="header">
      <div id="nav-badge">
        <a href="#intro">Resume</a>
      </div>

      <div class="nav-item">
        <a href="#about">About</a>
      </div>
      <div class="nav-item">
        <a href="#jobs">Experience</a>
      </div>
      <div class="nav-item">
        <a href="#projects">Work</a>
      </div>
      <div class="nav-item">
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}
