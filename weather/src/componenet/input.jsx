import React from "react";
import { useWeather } from "../Context/Weather";

const Input = ()=>{
    const weather=useWeather()
    console.log(weather)
    return (
        <input type="text"
        className="inputfeild"
       
        value={weather.searchCity}
        onChange={(e)=>weather.setSearchCity(e.target.value)}
        />
        // <Input value={weather.searchCity} onChange={(e) => weather.setSearchCity(e.target.value)} />

    )
}
export default Input;