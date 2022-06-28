import React from 'react'
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
  <div className={styles.realty}>
      <h2>REALTY.</h2>
      <p>Privacy Policy</p>
      <p>Terms of service</p>
  </div>
  <div className={styles.links}></div>
    </footer>
  );
}

export default Footer