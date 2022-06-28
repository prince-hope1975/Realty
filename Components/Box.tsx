import { url } from "inspector";
import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";

const Box = (
  props: PropsWithChildren & {
    img: string;
    price: number;
    time_in_secs: number;
    desc: string;
    owner: string;
  }
) => {
  const { img, price, time_in_secs, owner, desc } = props;
  const time = new Date(time_in_secs * 1000).toISOString().substring(11, 19);
  const [hour, min, sec] = time.split(":");
  const [hours, setHours] = useState(Number(min));
  const [minutes, setMinutes] = useState(Number(min));
  const [seconds, setSeconds] = useState(Number(sec));
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
  });
  return (
    <div {...props} className={styles.box}>
      {/* <img src={img} alt=""/> */}
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.desc}>
        <div className={styles.owner}>
          <span>owner</span> : @{owner}
        </div>
        <div className={styles.secondary_area}>
          <span>Ends in</span> {hours}h {minutes}m {seconds}s
        </div>
        <div className={styles.secondary_area}>
          <span>Current Bid</span> {price} Algo
        </div>
      </div>
    </div>
  );
};

export const DisplayBoxes = (
  props: PropsWithChildren & { head: string; text: string }
) => {
  const { head, text } = props;
  return (
    <div className={styles.display_boxes}> 
      <h3>{head}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Box;
