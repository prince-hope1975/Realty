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
import { PropsWithChildren, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import dataObj from "../data/data";
import { fetchDb } from "../helper/firebaseHelper";
import Upload from "../Components/uploadBtn";
import { listAll, ref ,getDownloadURL} from "firebase/storage";
import storage, {writeNFTData} from "../helper/firebaseHelper";
import { useGlobalContext } from "../context";
import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetchDb();
  // const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: JSON.stringify(res),
    },
  };
}
// @ts-ignore
const Home: NextPage = ({posts}:PropsWithChildren) => {
  const [imageList, setImageList] = useState<Array<string>>([])
  const imageListRef = ref(storage, "images/")
  const {data,setData} = useGlobalContext()
  useEffect(()=>{
  (async()=>{
    
      // const post = await fetchDb();
      console.log("posts", JSON.parse(posts));
  })()
  const post =JSON.parse(posts)
  // @ts-ignore
  setData({ ...dataObj, nft_data: Object.keys(post).map((key)=>{return { ...post[key].data, id: reach["bigNumberToNumber"](post[key].data.id) };}) });
  
  },[])
  const matches = useMediaQuery("(min-width: 400px)");
  const [state, setState] = useState(false);
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
        {/* <Upload /> */}
        {/* {imageList.map((item)=><><img src={item} alt={item} /></>)} */}
        <section className={styles.site_picks}>
          <Navbar />
          <div className={styles.site_pick_image_section}>
            <h3>Site Pick</h3>
            <div className={styles.images}>
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
                <p>List Price: 10 Algo</p>
              </div>
              <div className={styles.details}>
                <Link href="/item/803025966">View Details</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="buy" className={styles.top_propertes}>
          <h3>Top Properties</h3>
          {matches ? (
            <div className={styles.show_case}>
              {data.nft_data?.map((props) => {
                console.log("props", props);
                return <Box key={props.id + props.desc} {...props} />;
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

export type data = {
  nft_data: {
    id: string;
    img: string;
    price: number;
    time_in_secs: number;
    desc: string;
    owner: string;
    previous_prices: number[];
  }[];
  descriptive_data: string[];
  dropDown: {
    id: string;
    name: string;
    filters: string[];
  }[];
};
export default Home;
// https://firebasestorage.googleapis.com/v0/b/