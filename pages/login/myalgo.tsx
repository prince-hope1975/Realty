import React, { useEffect } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import { useGlobalContext } from "../../context";
import { useRouter } from "next/router";
import Layout from "../../Components/Layout";

const Myalgo = () => {
  const { appState, dispatch,state, setState } = useGlobalContext();
  const Router = useRouter();
  useEffect(() => {
    setTimeout(check, 500);
    reach.setWalletFallback(
      reach.walletFallback({
        providerEnv: "TestNet",
        MyAlgoConnect,
      })

      );
  }, []);
  const check = () => {
    const wallet = window.localStorage.getItem("current_wallet");
    console.log("Appstate", wallet);
    if (wallet !== "myalgo") {
     window.localStorage.setItem("current_wallet", "myalgo");
      // @ts-ignore
      Router.reload();
    }
    else{
      reach.getDefaultAccount()
    }
  };
  return <div onClick={() => reach.getDefaultAccount()}>myalgo</div>;
};

export default Myalgo;
