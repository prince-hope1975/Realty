// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createNFT } from "../helper/NtfApi";
import algodclient from "../../../helper/algodclient";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string |unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let algd = await algodclient();
  console.log(req.body)
  const pat = JSON.parse(req.body);
  console.log("Pat", pat)
  try {
    let accountInfo = await algd
      .accountInformation(pat.networkAccount)
      .do();
    console.log(accountInfo);
    res.status(200).json({ name: JSON.stringify(accountInfo) });
  } catch (error) {
    console.log(error);
    res.json({name:error});
  }
}
