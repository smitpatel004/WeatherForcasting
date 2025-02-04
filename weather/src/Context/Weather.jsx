import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity,getWeatherDataForLocation} from "../api";
// import { getWeatherDataForCity, getWeatherDataForLocation, fetchCurrentUserLocation } from "../api/index.jsx";

const WeatherContext=createContext(null);

export const useWeather=()=>{
    return useContext(WeatherContext)
}
export const WeatherProvider=({children})=>{
    const [data,setData]=useState(null);
    const [searchCity,setSearchCity]=useState("");

    // const fetchData=async()=>{
    //     const response=await getWeatherDataForCity(searchCity)
    //     setData(response)
    // }
    const fetchData = async () => {
        if (!searchCity) {
          console.error("City name is required!");
          return;
        }
        try {
          const response = await getWeatherDataForCity(searchCity);
          setData(response);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
      
  // const fetchCurrentUserLocation=()=>{
  //   navigator.geolocation.getCurrentPosition((position)=>{
  //     getWeatherDataForLocation(position.coords.latitude,position.coords.longitude).then((data)=>setData(data)
  
  //     )
  //   })
  // }



    // return (<WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData}} >{props.children}
    // </WeatherContext.Provider>)
     return (
        <WeatherContext.Provider value={{ searchCity, setSearchCity, data, fetchData }}>
          {children}
        </WeatherContext.Provider>
      );
}