import React, { useEffect, useState } from "react";
import styles from "../../styles/uniquepage.module.scss";
import { useRouter } from "next/router";
import SearchComp from "../../Components/searchComp";
import Navbar from "../../Components/Navbar";
import data from "../../data/data";
import Layout from "../../Components/Layout";
import { Button } from "@mui/material";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import {
  AiOutlineMail,
  AiOutlineHeart,
  AiFillClockCircle,
} from "react-icons/ai";
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
  },[time]);
  useEffect(() => {
    console.log(pid);
    const result = data.nft_data.find((item) => item.id === pid);
    if (!result) {
      console.log("result", result);
      setFetched(false);
    }
    else{
        const time = new Date(result?.time_in_secs * 1000)
          .toISOString()
          .substring(11, 19);
        setTime(time);
         const [hour, min, sec] = time.split(":");
         setMinutes(Number(min))
         setSeconds(Number(sec))
         setHours(Number(hour))
    }
    setData(result);
  }, []);
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
        </div>
        <div>
          <span className={styles.owner}>
            {" "}
            Owned by <p>{fetchedData.owner}</p>
          </span>
          <span className={styles.home_details}>
            Home #{fetchedData.id}{" "}
            <span className={styles.icons}>
              <Button>
                230 <AiOutlineHeart />
              </Button>{" "}
              <Button>
                <AiOutlineMail />
              </Button>
            </span>
          </span>
          <div className={styles.owner}>
            Current Price{" "}
            <div className={styles.time}>
              {" "}
              <AiFillClockCircle />
              <span>Ends in</span> {hours}:{minutes}:{seconds}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
