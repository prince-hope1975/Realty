import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import styles from "../styles/Search.module.scss"
import SearchComp from "../Components/searchComp";
import Layout from '../Components/Layout';
import DropDown from '../Components/dropDown';
import { Box2 } from '../Components/Box';
import { data as Data} from '.';
const Search = () => {
  return (
    <Layout className={styles.main}>
      <Navbar className={styles.nav} Component={<SearchComp />} />
      <div className={styles.grid}>
        <div className={styles.nav}>
          <div className={styles.stick}>
            {data.map((props) => {
             return <DropDown key={props.name} data={props}/>
            })}
          </div>
        </div>
        <div className={styles.layout}>
          <Box2 {...Data}  img= "/hero.jpeg" />
          <Box2 {...Data}  img= "/hero.jpeg" />
          <Box2 {...Data}  img= "/hero.jpeg" />
          <Box2 {...Data}  img= "/hero.jpeg" />
          <Box2 {...Data}  img= "/hero.jpeg" />
          <Box2 {...Data}  img= "/hero.jpeg" />
          <Box2 {...Data}  img= "/hero.jpeg" />
          <Box2 {...Data}  img= "/hero.jpeg" />
        </div>
      </div>
    </Layout>
  );
}

const data = [
  {
    name: "Status",
    filters: ["Buy Now", "Auction", "New", "Has Offers"],
  },
  {
    name: "Price",
    filters: ["Buy Now", "Auction", "New", "Has Offers"],
  },
  {
    name: "Quantity",
    filters: ["Buy Now", "Auction", "New", "Has Offers"],
  },
  {
    name: "Chains",
    filters: ["Buy Now", "Auction", "New", "Has Offers"],
  },
  {
    name: "Catgory",
    filters: ["Buy Now", "Auction", "New", "Has Offers"],
  },
  {
    name: "Currency",
    filters: ["Buy Now", "Auction", "New", "Has Offers"],
  },

];

export default Search