import React from "react";
import { useGlobalContext } from "../../../context";
import styles from "./style.module.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { ArrowRightAlt } from "@mui/icons-material";

const Index = ({ text, id }: { text?: string  ,id?:number}) => {
  const router = useRouter();
  const { setShowModal } = useGlobalContext();
  return (
    <div className={styles.main}>
      {text ||
        `Your home NFT has been minted with an id of" \n "${id?id:"For some reason you do not have an ID"}"`}
      {!text && <Button
        variant="outlined"
        onClick={() => {
          router.push("/list/list");
          setShowModal(false);
        }}
      >
        List Here
        <ArrowRightAlt />
      </Button>
}    </div>
  );
};

export default Index;
