import React, { useState,useEffect } from 'react'

const Meals = () => {
const [fetchData, setfetchData] = useState([])

    const fetchMeals = async () => {
       const response = await fetch (`http://localhost:3000/meals`)
       if (!response.ok){
        throw Error ("Fetch Failed")
       }
       const resData = await response.json()
       setfetchData(resData)
    }


    useEffect(()=> {
        fetchMeals()
    },[fetchMeals])


  return (
    <>
        <ul id='meals'>
       
          {fetchData.map((meal)=>(
            <li key={meal.id}>
                {meal.name}
            </li>
          ))}

        </ul>
    </>
  )
}

export default Meals