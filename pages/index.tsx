import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "../styles/Home.module.scss";
import Box, { DisplayBoxes, Box2 } from "../Components/Box";
import SwipableSection from "../Components/Swippable";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import data from "../data/data";

const Home: NextPage = () => {
  const matches = useMediaQuery("(min-width: 400px)");
  const [state, setStat] = useState(false);
  useEffect(() => {
    window.localStorage.setItem("current_wallet", "");
  }, []);
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Realty</title>
        <meta
          name="description"
          content="Real estate Website for the Blockchain"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>REALTY.</h1>
          <p>Real Estate Marketplace on the Blockchain</p>
          <div className={styles.inputField}>
            <input type="text" placeholder="Search For  Places, Cities E.T.C" />
            <AiOutlineArrowRight />
          </div>
          <div className={styles.bg}></div>
        </section>
        <section className={styles.site_picks}>
          <Navbar />
          <div className={styles.site_pick_image_section}>
            <h3>Site Pick</h3>
            <div className={styles.images}>
              {/* <Image src={"/stairs.jpeg"} width={300} height={300}/> */}
              <div
                className={styles.img1}
                style={{ backgroundImage: "url(/stairs.jpeg)" }}
              ></div>
              {/* <div
                className={styles.img2}
                style={{ backgroundImage: "url(/stairs.jpeg)" }}
              ></div> */}
              <div
                className={styles.img2}
                style={{ backgroundImage: "url(/stairs.jpeg)" }}
              ></div>
            </div>
            <div className={styles.property_info}>
              <h4>Deluxe Rooms, Lekki Phase 2</h4>
              <p>
                Fully furnished 3 bedroom deluxe apartment in Lekki. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolore sed veniam
                asperiores quae corrupti fugiat deserunt aperiam sequi
                voluptate, explicabo perspiciatis cumque quia blanditiis?
                Voluptate ullam dolor veniam debitis maiores?
              </p>
              <div>
                <span>
                  Listed By: <Link href="">John Doe</Link>
                </span>
                <p>List Price: 1000 Algo</p>
              </div>
              <div className={styles.details}>View Details</div>
            </div>
          </div>
        </section>
        <section className={styles.top_propertes}>
          <h3>Top Properties</h3>
          {matches ? (
            <div className={styles.show_case}>
              {data.nft_data.map((props)=>{
                return <Box key={props.id + props.desc} {...props} />
              })}
            </div>
          ) : (
            <SwipableSection />
          )}
        </section>
        <section className={styles.collector}>
          <h3 className={styles.collector_title}>Be a Collector</h3>
          <div className={styles.boxes}>
            {boxData.map((prop) => {
              return <DisplayBoxes key={prop.head} {...prop} />;
            })}
          </div>
        </section>
      </main>

      <Footer />
    </Layout>
  );
};

const boxData = [
  { head: "connect", text: "Connect with supported wallets." },
  { head: "Buy", text: "Buy properties on the blockchain." },
  { head: "Sell", text: "Your Properties will shine in our marketplace." },
];
export default Home;
