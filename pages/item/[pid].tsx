import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
// import {data} from "../search";
import data from "../../data/data";
import Layout from "../../Components/Layout";
type dataType = {
  id: string;
  img: string;
  price: number;
  time_in_secs: number;
  desc: string;
  owner: string;
};

const Post = () => {
    const router = useRouter()
    const [fetchedData, setData] = useState({} as dataType | undefined);
    const [fetched, setFetched] = useState<null|boolean>();
    const {pid} = router.query
    useEffect(()=>{
        console.log(pid);
        const result = data.nft_data.find((item) => item.id === pid);
        if(!result){
          console.log("result",result)
          setFetched(false)
        }
        setData(result)
    },[])
    useEffect(() => {
      if(!fetchedData && fetched===false){
        setTimeout(()=>{
          console.log(fetchedData, "\n", fetched);
          router.push("/");
        }, 4000)
      }
    }, [fetchedData, fetched]);
    if (!fetchedData && fetched === false){
      return <>404 Page not found</>
    }
      if (!fetchedData) {
        return <Layout>Loading...</Layout>;
      }
  return (
    <Layout>
     {fetchedData.owner}
     {fetchedData.owner}
     {fetchedData.owner}
    </Layout>
  );
}

export default Post