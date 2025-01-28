

import { useState,useEffect } from "react";
import axios from "axios"

const useFetch = (url) => {
    const [data,setdata] = useState(null);
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null);

   
   useEffect(() => {
    const fetchData = async () => {
        try {
         const response = await axios.get(url);
         setdata(response)
        
         setError(null)
            
        } catch (error) {
            console.log(error);
            setError(error.message)
            
        }finally{
            setLoading(false)
        }
    };

    fetchData()
   },[url])


    return [data,loading,error]

}
export default useFetch;