import React from 'react'
import styles from './navbar.module.css'

 export default function Navbar() {
  const links = [
    {
      id: 1,
      title: "home"
    },
    {
      id: 2 , 
      title: "about"
    },
    {
      id: 3 , 
      title: "contact"
    },
    {
      id: 4 , 
      title: "portfolio"
    },
    {
      id: 5 , 
      title: "blog"
    }
  ]
return(
  <div className={styles.container}>
  <div>main</div>
  <div className={styles.links}>
    {links.map(link => 
      (<div>
        {link.title}
        </div>))
      }
  </div>
  </div>
  )}
