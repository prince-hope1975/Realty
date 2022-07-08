import React, { useEffect } from "react";
import { ALGO_WalletConnect as WalletConnect } from "@reach-sh/stdlib";
import { loadStdlib } from "@reach-sh/stdlib";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context";
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

const Pera = () => {
  const { appState, dispatch, state, setState, setWallet } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    
    reach.setWalletFallback(
      reach.walletFallback({
        providerEnv: "TestNet",
        WalletConnect,
      })
      );
      check();
  }, []);
  // useEffect(() => {
  //   const wallet = window.localStorage.getItem("current_wallet");

  //   if (wallet == "pera") {
  //     check();
  //   }
  // }, []);
  const check = async () => {
    const wallet = window.localStorage.getItem("current_wallet");
    console.log("Appstate", wallet);
    if (wallet !== "pera") {
      window.localStorage.setItem("current_wallet", "pera");
      // @ts-ignore
      router.reload();
    } else {
      const acct = await reach.getDefaultAccount();
      setWallet(acct);
      router.push("/");
    }
  };

  return <div>pera</div>;
};

export default Pera;
