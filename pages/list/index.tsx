import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { useGlobalContext } from "../../context";
import styles from "../../styles/list.module.scss";
import {
  Input,
  TextareaAutosize,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Upload from "../../Components/uploadBtn";

const List = () => {
  const { wallet, metadata, setMetadata } = useGlobalContext();
  const [info, setInfo] = useState({
    name: "",
    desc: "",
    img: "",
    unit_name: "",
  });
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
            required
            id="component-outlined"
            // value={"name"}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            label="Name"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-outlined">UNIT NAME</InputLabel>
          <OutlinedInput
            required
            id="component-outlined"
            // value={"name"}
            onChange={(e) => setInfo({ ...info, unit_name: e.target.value })}
            label="UNIT NAME"
          />
        </FormControl>
        <TextareaAutosize
          aria-label="NFT description"
          placeholder="DESCRIPTION"
          minRows={8}
          required
          onChange={(e) => setInfo({ ...info, desc: e.target.value })}
          // style={{ width: 200 }}
        />{" "}
        <Upload
          metadata={{
            name: info.name,
            unit_name: info.unit_name,
            description: info.desc,
            // image: info.img,
          }}
        />
      </form>
    </div>
  );
};

export default List;
