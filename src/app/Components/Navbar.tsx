import React from 'react'
import Link from 'next/link'
import styles from "../styles/navbar.module.css"
const Navbar = () => {
  return (
    <div  className= {styles.nav}>

        <ul>
        <Link href = "/"> Home</Link>
        <Link href = "/about"> About</Link>
        <Link href = "/services"> Services</Link>
        <Link href = "/contact"> Contact</Link>
        </ul>
    </div>

  )
}

export default Navbar
