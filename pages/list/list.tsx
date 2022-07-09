import React, { FormEvent, useEffect, useState } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
import { useGlobalContext } from "../../context";
import styles from "../../styles/list.module.scss";
import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Button } from "@mui/material";
import * as backend from "../../smartcontract/build/index.main.mjs";
import {writeJson} from "../../helper/firebaseHelper";
import Listing from "../../Components/popupTemplates/Listing"
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

const List = () => {
  const { setMetadata, metadata, wallet, setShowModal, setModalMessage } =
    useGlobalContext();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [submit, setSubmit] = useState(false);
  const [totalTime, setTotalTimes] = useState({
    totalTimeFrontend: 0,
    totalTimeContract: 0,
  });
  useEffect(() => {
    const totalTimeContract =
      time.days * 24 * 60 * 60 +
      time.hours * 60 * 60 +
      time.minutes * 60 +
      time.seconds;
    const totalTimeFrontend = new Date();
    totalTimeFrontend.setDate(totalTimeFrontend.getDate() + time.days);
    totalTimeFrontend.setHours(totalTimeFrontend.getHours() + time.hours);
    totalTimeFrontend.setMinutes(totalTimeFrontend.getMinutes() + time.minutes);
    totalTimeFrontend.setSeconds(totalTimeFrontend.getSeconds() + time.seconds);
    const timeFrontend = totalTimeFrontend.getTime();
    setTotalTimes({ totalTimeFrontend: timeFrontend, totalTimeContract });
  }, [submit]);
  const getSale = () => {
    return [
      metadata.id,
      reach.parseCurrency(metadata.price),
      totalTime.totalTimeContract,
    ];
  };
  const seeBid = (who: any, bid: any) => {
    console.log(
      // @ts-ignore
      `You saw that ${reach.formatAddress(who)} bid ${reach.formatCurrency(
        bid
      )}`
    );
  };
  const timeout = () => {
    setModalMessage("The contract has reached the timeout");
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };
  const showOutcome = () => {};
  useEffect(() => {
    if (submit) {
      (async()=>{
      try {
        setMetadata({
          ...metadata,
          price: price,
          time_in_secs: totalTime.totalTimeFrontend,
          previous_prices: [...metadata["previous_prices"], price],
        });
        window.localStorage.setItem("reach-metadata", JSON.stringify(metadata));
        const Creator = wallet.contract(backend);
       Promise.all([
         backend.Creator(Creator, {
           getSale,
           seeBid,
           timeout,
           showOutcome,
         }),
       ])
         .then(([item]) => {
           console.log(item);
         })
         .catch((e) => console.log(e));
        const contract = await Creator.getInfo();
        console.log("contract", contract);
        await writeJson(
          metadata.id,
          {
            ...metadata,
            contractInfo: contract,
            price: price,
            time_in_secs: totalTime.totalTimeFrontend,
            previous_prices: [...metadata["previous_prices"], price],
          },
          metadata.img
        );
        setShowModal(true);
        setModalMessage(<Listing id={metadata.id} />);
      } catch (error) {
        console.log(error)
      } })()
    }
  }, [totalTime]);
  const [price, setPrice] = useState(0);
  const handleDays = (e: any) => {
    setTime({ ...time, days: e.target.value });
  };
  const handleHours = (e: any) => {
    setTime({ ...time, hours: e.target.value });
  };
  const handleMins = (e: any) => {
    setTime({ ...time, minutes: e.target.value });
  };
  const handleSecs = (e: any) => {
    setTime({ ...time, seconds: e.target.value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.listOnSite}>
        {" "}
        <h2>Select Duration of Listing</h2>
        <div>
          <TimeSelect
            value={time.days}
            handleChange={handleDays}
            val={10}
            label={"days"}
          />
          <TimeSelect
            value={time.hours}
            handleChange={handleHours}
            val={24}
            label={"hours"}
          />
          <TimeSelect
            value={time.minutes}
            handleChange={handleMins}
            val={60}
            label={"min"}
          />
          <TimeSelect
            value={time.seconds}
            handleChange={handleSecs}
            val={60}
            label={"sec"}
          />
        </div>
        <h2>Select the Listing Price</h2>
        <TextField
          type="number"
          required
          // value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Input Price in Algo (Ⱥ)"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        />{" "}
        <Button type="submit" variant="contained">
          List NFT
        </Button>
      </div>
    </form>
  );
};

const TimeSelect = ({
  val,
  label,
  handleChange,
  value,
}: {
  val: number;
  label: string;
  value: number;
  handleChange: (e: any) => void;
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`${label}-label`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {/* @ts-ignore */}
        {[...Array(val).keys()].map((item, index) => {
          return (
            <MenuItem key={item + index} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default List;
