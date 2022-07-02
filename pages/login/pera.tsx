import React, { useEffect } from "react";
import { ALGO_WalletConnect as WalletConnect } from "@reach-sh/stdlib";
import { loadStdlib } from "@reach-sh/stdlib";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context";
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));

const pera = () => {
  const { appState, dispatch,state, setState } = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    setTimeout(check, 500);
    reach.setWalletFallback(
      reach.walletFallback({
        providerEnv: "TestNet",
        WalletConnect,
      })
    );
  }, []);
  const check = () => {
    const wallet = window.localStorage.getItem("current_wallet")
    console.log("Appstate", wallet);
    if (wallet !== "pera") {
      window.localStorage.setItem("current_wallet", "pera");
      // @ts-ignore
      router.reload();
    } else {
      reach.getDefaultAccount();
    }
  };

  return <div onClick={() => reach.getDefaultAccount()}>pera</div>;
};

export default pera;
