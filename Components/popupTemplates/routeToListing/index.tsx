import React from 'react'
import { useGlobalContext } from '../../../context'
import styles from "./style.module.scss"

const Index = () => {
    const {} = useGlobalContext()
  return (
    <div className={styles.main}>

    </div>
  )
}

export default Index