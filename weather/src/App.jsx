import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenet/Card'
import Button from './componenet/Button'
import Input from './componenet/input'
import { useWeather } from './Context/Weather'
import { useEffect } from 'react'






function App() {
  const [count, setCount] = useState(0)
  const weather=useWeather();
  console.log("weather>>>>>>>>>>>>>>>>>>>",weather)
//   useEffect(()=>{
// weather.fetchCurrentUserLocationData();
//   },[])

  return (
 

      <div>
      <h1>Weatehr Forcast</h1>
      <Input></Input> <Button  onClick={weather.fetchData} value="search" ></Button>
      <Card></Card>
<Button value="refresh" ></Button>      
      </div>
    
  
  )
}

export default App
