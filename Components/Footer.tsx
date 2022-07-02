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
  <div className={styles.links}>
    <ul>
      <li>Learn</li>
      <li>Create</li>
      <li>Collect</li>
      <li>Sell</li>
    </ul>
    <ul>
      <li>Company</li>
      <li>Careers</li>
      <li>Help Center </li>
      <li>Subscribe</li>
    </ul>
    <ul>
      <li>Connect </li>
      <li>Twitter</li>
      <li>Instagram</li>
      <li>Youtube</li>
    </ul>
  </div>
    </footer>
  );
}

export default Footer