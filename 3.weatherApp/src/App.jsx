import { useState } from 'react'
import useFetch from './useFetch';

function App() {
  const [city,setCity] = useState('Nellore');
  const API_KEY = import.meta.env.VITE_WEATHER_API;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const {data,loading,error} = useFetch(url);

  function handleSubmit(e) {
   e.preventDefault();
  }

  return (
    <div className="bg-gradient-to-r from-indigo-200 via-blue-100 to-green-200 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-8 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text ">
        WEATHER APP
      </h1>
      <form onSubmit={handleSubmit} className='mb-8'>
       <input type='text' 
       value={city}
        placeholder='Enter City...'
        id='city'
       onChange={(e) => setCity(e.target.value)}
       className='focus:outline-none px-4 py-2 shadow-lg focus:ring-2 focus:ring-blue-500 rounded-md'
       
        />

      </form>
   
    </div>
  );
}

export default App
