import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import styles from "../styles/Search.module.scss"
import SearchComp from "../Components/searchComp";
import Layout from '../Components/Layout';
import DropDown from '../Components/dropDown';
import { Box2 } from '../Components/Box';
// import { data as Data} from '.';
import data from '../data/data';
const Search = () => {
  return (
    <Layout className={styles.main}>
      <Navbar className={styles.nav} Component={<SearchComp />} />
      <div className={styles.grid}>
        <div className={styles.nav}>
          <div className={styles.stick}>
            {data.dropDown.map((props) => {
             return <DropDown key={props.name} data={props}/>
            })}
          </div>
        </div>
        <div className={styles.layout}>
          {data.nft_data.map((props)=>{
            if (Number(props.id) < 9) return;
            return <Box2 {...props}/>
          })}
        </div>
      </div>
    </Layout>
  );
}


export default Search