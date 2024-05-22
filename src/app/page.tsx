/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import axios from "axios";

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
