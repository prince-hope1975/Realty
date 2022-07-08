// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSpKUpt07ssUs4ExOjHwgjG6jKy3ODbbo",
  authDomain: "nft-algo.firebaseapp.com",
  projectId: "nft-algo",
  storageBucket: "nft-algo.appspot.com",
  messagingSenderId: "645584662584",
  appId: "1:645584662584:web:887a58f64f5c023c84f6cd",
  measurementId: "G-P1R8D1DDMF",
};

// Initialize Firebase


export function writeNFTData( imageUrl:string, metadata:metadata, id?:number) {
  const db = getDatabase();
  set(ref(db, "users/" + imageUrl), {
    image: imageUrl,
    data: metadata,
    number: id
  });
}
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

type metadata = {
    "name": string,
    "description": string,
    "image": string,
    "image_integrity"?: string,
    "properties"?: {
        "simple_property": string,
        "rich_property": {
            "name": string,
            "value": "001",
            "display_value": "001",
            "class": "emphasis",
            "css": {
                "color": "#ffffff",
                "font-weight": "bold",
                "text-decoration": "underline"
            }
        },
        "array_property": {
            "name": string,
            "value": [1, 2, 3, 4],
            "class": "emphasis"
        }
    }
};
export default storage;
