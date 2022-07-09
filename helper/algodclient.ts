import algosdk from "algosdk";

const algodclient = async()=>{
  // const algodToken =
  //   "2f3203f21e738a1de6110eba6984f9d03e5a95d7a577b34616854064cf2c0e7b";
  // const algodServer = "https://academy-algod.dev.aws.algodev.network";
  // const algodPort = 443;
  const algodToken = {
      "X-API-KEY": "'FmjLsTUUlC1rp69DbyzGp8r74DPCCNR98cspJDq3'"
  };
  const algodServer = 'https://testnet-algorand.api.purestake.io/ps2';
  const algodPort = "FmjLsTUUlC1rp69DbyzGp8r74DPCCNR98cspJDq3";
// @ts-ignore
  let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodToken);
  return algodClient;
}

export default algodclient

