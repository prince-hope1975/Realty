import React, {  PropsWithChildren } from 'react'
import styles from "../styles/Home.module.scss"
import Link from 'next/link';

const Navbar = (
  props: PropsWithChildren & {
    link?: string;
    className?: string;
    Component?: React.ReactElement;
  }
) => {
  const { Component } = props;
  return (
    <div {...props} className={`${styles.head} ${props.className}`}>
      {Component ? (
        Component
      ) : (
        <ul>
          <li>
            <Link href="search">Search</Link>
          </li>
          <li>
            <Link href="">List</Link>
          </li>
          <li>
            <Link href="">Buy</Link>
          </li>
        </ul>
      )}
      <h2>
        <Link href={"/"}>Realty</Link>.
      </h2>
      <div>
        <Link href={!props.link ? "/login" : props.link}>Connect Wallet</Link>
      </div>
    </div>
  );
};

export default Navbar