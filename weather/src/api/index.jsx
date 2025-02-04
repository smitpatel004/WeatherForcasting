const baseUrl="https://api.weatherapi.com/v1/current.json?key=9040e7acc8a943deb6c51425250402"
export const getWeatherDataForCity=async(city)=>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`)
    return await response.json();
}

export const getWeatherDataForLocation=async(lat,lon)=>{
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`)
    return await response.json();
}

// export const fetchCurrentUserLocation = async () => {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 resolve({
//                     latitude: position.coords.latitude,
//                     longitude: position.coords.longitude,
//                 });
//             },
//             (error) => reject(error)
//         );
//     });
// };

// export { getWeatherDataForCity, getWeatherDataForLocation, fetchCurrentUserLocation };
