import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useGlobalContext } from "../context";
import styles from "../styles/list.module.scss";
import {
  Input,
  TextareaAutosize,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Upload from "../Components/uploadBtn";

const List = () => {
  const { wallet } = useGlobalContext();
  const ariaLabel = { "aria-label": "description" };
  useEffect(() => {
    (async () => {
      try {
        console.log(wallet);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className={styles.main}>
      <Navbar className={styles.nav} />
      <h2 className={styles.intro}>
        Proceed with minting and listing your NFT
      </h2>
      <form>
        <FormControl>
          <InputLabel htmlFor="component-outlined">NAME</InputLabel>
          <OutlinedInput
            id="component-outlined"
            // value={"name"}
            onChange={(e) => console.log(e.target.value)}
            label="Name"
          />
        </FormControl>{" "}
        <FormControl>
          <InputLabel htmlFor="component-outlined">UNIT NAME</InputLabel>
          <OutlinedInput
            id="component-outlined"
            // value={"name"}
            onChange={(e) => console.log(e.target.value)}
            label="UNIT NAME"
          />
        </FormControl>
        <TextareaAutosize
          aria-label="NFT description"
          placeholder="DESCRIPTION"
          minRows={5}
          style={{ width: 200 }}
        />{" "}
        {/* <Input placeholder="NAME"  inputProps={ariaLabel} /> */}
        <Upload />
      </form>
    </div>
  );
};

export default List;
