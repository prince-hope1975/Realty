import React, { useEffect } from "react";
import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import { useGlobalContext } from "../../context";
import { useRouter } from "next/router";

const Myalgo = () => {
  const { appState, dispatch, state, setState, setWallet } = useGlobalContext();
  const Router = useRouter();
  useEffect(() => {
    
    reach.setWalletFallback(
      reach.walletFallback({
        providerEnv: "TestNet",
        MyAlgoConnect,
      })
      );
      check()
  }, [])
  ;

  const check = async () => {
    const wallet = window.localStorage.getItem("current_wallet");
    console.log("Appstate", wallet);
    if (wallet !== "myalgo") {
      window.localStorage.setItem("current_wallet", "myalgo");
      // @ts-ignore
      Router.reload();
    } else {
     try{
       const acct = await reach.getDefaultAccount();
      console.log('getting acct', acct)
      setWallet(acct);
     }
     catch(e){
      console.log(e)

     }
      Router.push("/");
    }
  };
  return <div>myalgo</div>;
};

export default Myalgo;
