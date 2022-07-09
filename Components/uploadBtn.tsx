import { PropsWithChildren, useEffect, useState } from "react";
import storage from "../helper/firebaseHelper";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { loadStdlib } from "@reach-sh/stdlib";
import algosdk from "algosdk";
/* @ts-ignore */
import { v4 } from "uuid";
import { Button } from "@mui/material";
import { useRef } from "react";
import { metadata } from "../helper/firebaseHelper";
import { useGlobalContext } from "../context";
import isObjectEmpty from "../helper/chekcObj";

const reach = loadStdlib((process.env.REACH_CONNECTOR_MODE = "ALGO"));
function Upload(props: PropsWithChildren & { metadata?: metadata }) {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [formData, setFormData] = useState({});
  const [img, setImg] = useState("");
  const { wallet } = useGlobalContext();
  const imageRef = useRef();
  async function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
    }

    /* @ts-ignore */
    const storageRef = ref(storage, `images/${file.name + v4()}/`);
    /* @ts-ignore */
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          console.log(url);
          setImg(url);
          const mintObj = await reach.launchToken(
            wallet,
            // @ts-ignore
            props?.metadata?.name,
            props.metadata?.unit_name,
            {
              supply: 1,
              decimals: 0,
              // url: url,
            }
          );
            
          console.log(mintObj);
          // writeNFTData(mintObj.id, url, props.metadata)
        });
      }
    );
  }

  // Handles input change event and updates state
  function handleChange(event: any) {
    // @ts-ignore
    setFile(event?.target?.files[0]);
    const form = new FormData();
    form.append("file", event?.target?.files[0]);
    console.log(form.get("file"));
    setFormData(form);
  }

// useEffect(()=>{
//   console.log(
//     reach.bigNumberToNumber({ _hex: "0x2fd4b9f5", _isBigNumber: true })
//   );
// })
  return (
    <>
      <input
        /* @ts-ignore */
        ref={imageRef}
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={handleChange}
        required
      />
      {/* /* @ts-ignore  */}
      {!file ? (
        <Button
          variant="outlined"
          {...props}
          /* @ts-ignore */
          onClick={() => imageRef?.current?.click()}
        >
          Choose Image
        </Button>
      ) : (
        <Button
          // type="submit"
          variant="contained"
          {...props}
          onClick={handleUpload}
          disabled={isObjectEmpty(wallet)}
        >
          MINT
        </Button>
      )}
     {!(percent==0) && <p>{percent} % done</p>}
    </>
  );
}

export default Upload;
