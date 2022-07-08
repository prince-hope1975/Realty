import React, {  PropsWithChildren } from 'react'
import styles from "../styles/Home.module.scss"
import Link from 'next/link';
import { Button } from '@mui/material';
import { useGlobalContext } from '../context';

const Navbar = (
  props: PropsWithChildren & {
    link?: string;
    className?: string;
    Component?: React.ReactElement;
  }
) => {
  const { Component } = props;
  const {wallet} = useGlobalContext()
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
            <Link href="list">List</Link>
          </li>
          <li>
            <Link href="buy">Buy</Link>
          </li>
        </ul>
      )}
      <h2>
        <Link href={"/"}>Realty</Link>.
      </h2>
      <div>
        {Object.keys(wallet).length === 0 ? (
          <Link href={!props.link ? "/login" : props.link}>Connect Wallet</Link>
        ) : (
          <Button
            // disabled
            onClick={() => {
              navigator.clipboard.writeText(wallet.getAddress());
            }}
          >
            {wallet.getAddress().toString().substring(0, 6) +
              "..." +
              wallet
                .getAddress()
                .toString()
                .substring(
                  wallet.getAddress().toString().length - 4,
                  wallet.getAddress().toString().length
                )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar