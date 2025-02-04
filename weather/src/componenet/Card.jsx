import React from "react";
import { useWeather } from "../Context/Weather";
const Card =()=>{
    const weather =useWeather();
    return (
    <div className="card" >
        {/* <h1>img</h1> */}
        <img src={weather?.data?.current?.condition?.icon} alt="" />
        <h2>{weather.data?.current?.temp_c}</h2>
        <h5>{weather.data?.location?.name},{weather.data?.location?.country},{weather.data?.location?.region}</h5>
    </div>
    )
}
export default Card;