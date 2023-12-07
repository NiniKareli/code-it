import React from 'react'
import styles from "./page.module.css"
export default function home() {
  return (
    <main className={styles.container}>
      <div>
        <h1 className={styles.title}>better design for yor digital products</h1>
        <p className={styles.desc}> </p>
        <button className={styles.button}>see our works</button>
      </div>
      <div></div>
    </main>
  )
}

