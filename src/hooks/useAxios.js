import {useState} from 'react'
import uuid from "uuid";
import axios from "axios";


const useAxios = (url) =>{
    const [response, setResponse] = useState([]);
    const addCard =  async (endOfUrl = '')=>{
      try {
        const { data } = await axios.get(url + endOfUrl);
        setResponse((response) => [...response, { ...data, id: uuid() }]);
      } catch (e) {
        alert(e);
        
      }
    }


    return [response, addCard];

}
export default useAxios;
// import { useState } from "react";
// import axios from "axios";
// import uuid from "uuid";

// const useAxios = (url) =>  {
//     const [responses, setResponses] = useState([]);
//     const addCard =  async (endOfUrl = "") => {
//         try {
//             const {data} = await axios.get(url + endOfUrl);
//             setResponses(responses => [...responses, { ...data, id: uuid() }]);
//         } catch(err) {
//             alert(err)
//         }
//     }
  
//     return [responses, addCard];
//   }
  
//   export default useAxios;

 