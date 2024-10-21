import React from 'react'
import styles from "../styles/hero.module.css"

const Hero = () => {
  return (
    <div className= {styles.hero}>
      <h1>Hero Section</h1>
      <p className= {styles.paragraph}>
        This is hero section made in component folder
      </p>
    </div>
  )
}

export default Hero
