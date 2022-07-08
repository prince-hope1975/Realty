import { PropsWithChildren, useState } from "react";
import storage from "../helper/firebaseHelper";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
          /* @ts-ignore */
import {v4} from "uuid";
import {Button} from "@mui/material"
import { useRef } from "react";
 type tp = Blob | Uint8Array | ArrayBuffer | string
function Upload(props: PropsWithChildren) {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

const imageRef = useRef()
  function handleUpload() {
    if (!file) {
      alert("Please choose a file first!");
    }
        
          /* @ts-ignore */
          const storageRef = ref(storage, `images/${file.name + v4()}/`)
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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    ); 
  }

  // Handles input change event and updates state
  function handleChange(event:any) {
    // @ts-ignore
    setFile(event?.target?.files[0]);
  }

  return (
    <div>
      <input
      /* @ts-ignore */
        ref={imageRef}
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      {/* <button>Upload to Firebase</button> */}
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
        <Button variant="contained" {...props} onClick={handleUpload}>
          MINT
        </Button>
      )}
      <p>{percent} % done</p>
    </div>
  );
}

export default Upload;
