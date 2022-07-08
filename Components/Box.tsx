import React, { PropsWithChildren, useEffect, useState } from "react";
import styles from "../styles/Box.module.scss";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context";
import { motion, MotionProps } from "framer-motion";

const Box = (
  props: PropsWithChildren & {
    id: string;
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
  const router = useRouter();
  return (
    <motion.div
      // whileInView={{ opacity: 1, }}

      animate={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ delay: 1, duration: 1 }}
      {...props}
      className={styles.box}
    >
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div
        className={styles.desc}
        onClick={() => {
          router.push(`/item/${props.id}`);
        }}
      >
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
    </motion.div>
  );
};
export const Box2 = (
  props: PropsWithChildren & MotionProps & {
    id: string;
    img: string;
    price: number;
    desc: string;
    owner: string;
    className?: string;
  }
) => {
  const { img, price, owner, desc, id, className } = props;
  const router = useRouter();

  return (
    <motion.div {...props} className={`${styles.box_2} ${className}`}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div
        className={styles.desc}
        onClick={() => {
          router.push(`/item/${props.id}`);
        }}
      >
        <div className={styles.owner}>
          <span>Home # {id} </span> <p>@{owner}</p>
        </div>
        <div className={styles.secondary_area}>
          <span>Price</span> {price} Algo
        </div>
        <div className={styles.secondary_area}>
          <span>Highest Bid</span> {price} Algo
        </div>
      </div>
    </motion.div>
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
export const DisplayBoxes2 = (
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

export const WalletBox = (
  props: PropsWithChildren & {
    dataArr: Array<{
      wallet_name: string;
      wallet_route: string;
      img: string;
    }>;
  }
) => {
  const router = useRouter();
  const { appState } = useGlobalContext();
  return (
    <div className={styles.wallet_box}>
      {props.dataArr.map(({ img, wallet_name, wallet_route }) => {
        return (
          <div
            key={wallet_name}
            onClick={() => {
    const wallet = window.localStorage.getItem("current_wallet");

              if (wallet !== wallet_name) {
                router.push(`login/${wallet_route}`);
              }
            }}
          >
            <img src={img} alt={wallet_name} />
            <p>{wallet_name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Box;
