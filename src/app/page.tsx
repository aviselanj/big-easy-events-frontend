/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import axios from "axios";

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);
export default function Home() {
  const baseURL: string | undefined = process.env.NEXT_PUBLIC_SERVER;
  if(baseURL){
  axios.get(baseURL)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
  return (
    <>
     
      
    </>
  );
}
