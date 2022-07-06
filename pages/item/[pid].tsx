import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "../../styles/uniquepage.module.scss";
import { useRouter } from "next/router";
import SearchComp from "../../Components/searchComp";
import Navbar from "../../Components/Navbar";
import data from "../../data/data";
import Layout from "../../Components/Layout";
import Footer from "../../Components/Footer";
import { Button } from "@mui/material";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { MotionProps } from "framer-motion";
import Box, { Box2 } from "../../Components/Box";
import {
  AiOutlineMail,
  AiOutlineHeart,
  AiFillClockCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";
type dataType = {
  id: string;
  img: string;
  price: number;
  time_in_secs: number;
  desc: string;
  owner: string;
};

const Post = () => {
  const router = useRouter();
  const [fetchedData, setData] = useState({} as dataType | undefined);
  const [fetched, setFetched] = useState<null | boolean>();
  const [time, setTime] = useState("");
  const { pid } = router.query;

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0)
  const carousel = useRef(null);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [time]);
  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    console.log(carousel?.current?.scrollWidth)
  },[])
  useEffect(() => {
    console.log(pid);
    const result = data.nft_data.find((item) => item.id === pid);
    if (!result) {
      console.log("result", result);
      setFetched(false);
    } else {
      const time = new Date(result?.time_in_secs * 1000)
        .toISOString()
        .substring(11, 19);
      setTime(time);
      const [hour, min, sec] = time.split(":");
      setMinutes(Number(min));
      setSeconds(Number(sec));
      setHours(Number(hour));
    }
    setData(result);
  }, [pid]);
  useEffect(() => {
    if (!fetchedData && fetched === false) {
      setTimeout(() => {
        console.log(fetchedData, "\n", fetched);
        router.push("/");
      }, 4000);
    }
  }, [fetchedData, fetched]);
  if (!fetchedData && fetched === false) {
    return <>404 Page not found</>;
  }
  if (!fetchedData) {
    return <Layout>Loading...</Layout>;
  }
  return (
    <Layout className={styles.layout}>
      <Navbar
        className={styles.nav}
        Component={<SearchComp className={styles.search} />}
      />
      <div className={styles.grid}>
        <div>
          <div className={styles.img_container}>
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${fetchedData.img})` }}
            ></div>
          </div>
          <div className={styles.arrows}>
            <HiArrowNarrowLeft /> <HiArrowNarrowRight />
          </div>
        </div>
        <div>
          <span className={styles.owner}>
            Owned by <p>{fetchedData.owner}</p>
          </span>
          <span className={styles.home_details}>
            Home #{fetchedData.id}
            <span className={styles.icons}>
              <Button>
                230 <AiOutlineHeart />
              </Button>
              <Button>
                <AiOutlineMail />
              </Button>
            </span>
          </span>
          <div className={styles.owner}>
            <div className={styles.time_container}>
              Current Price
              <div className={styles.time}>
                <AiFillClockCircle />
                <span>Ends in</span> {hours}:{minutes}:{seconds}
              </div>
            </div>
            <div className={styles.price_data}>
              <span>{fetchedData.price} Algo</span>
              <p className={styles.approximate}>
                (~ ${fetchedData.price * 0.3})
              </p>
            </div>
          </div>
          <div className={styles.desc}>
            {data.descriptive_data.map((prop, indexed) => {
              return (
                <div
                  onClick={() => setIndex(indexed)}
                  className={`${styles.prop} ${
                    index === indexed && styles.active
                  }`}
                  key={prop}
                >
                  {prop}
                </div>
              );
            })}
          </div>
          <div className={styles.desc_block}>
            <motion.div animate={{ display: index == 0 ? "flex" : "none" }}>
              {fetchedData?.desc}
            </motion.div>
            <NothingToView
              animate={{ display: index == 1 ? "flex" : "none" }}
            />
            <NothingToView
              animate={{ display: index == 2 ? "flex" : "none" }}
            />
            <NothingToView
              animate={{ display: index == 3 ? "flex" : "none" }}
            />
            <NothingToView
              animate={{ display: index == 4 ? "flex" : "none" }}
            />
          </div>

          <div className={styles.buttons}>
            <Button variant="contained">Buy Now</Button>
            <Button variant="outlined">Make Offer</Button>
          </div>
        </div>
      </div>
      <div className={styles.display}>
        <span>More like this</span>
        <motion.div
          className={styles.carousel}
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={styles.innerCrousel}
          >
            {data.nft_data.map((props) => {
              return <Box2 className={styles.box} {...props} />;
            })}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </Layout>
  );
};

const NothingToView = (props: PropsWithChildren & MotionProps) => {
  return (
    <motion.div
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 style={{ padding: "5px", margin: 0, textAlign: "center" }}>
        Nothing here yet
      </h2>
    </motion.div>
  );
};
export default Post;
