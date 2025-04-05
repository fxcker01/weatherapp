import { useState } from 'react'
import Form from './components/Form'
import Weather from './components/Weather'
import sun from './img/only-sun.svg'
import axios from 'axios'


function App() {
  const [cities, setCities] = useState([])

  const getWeather = (city) => {
    if(city === '') return  

    const API = 'ae219681f40354e7363a790086f6094c'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    
    axios.get(url)
      .then(res => {
        setCities(cities => [{
          name: city,
          temp: res.data.main.temp,
          feels: res.data.main.feels_like
        }, ...cities])
      })
      .catch(err => console.log(err))
  }

  const deleteWeather = (city) => {
    const newCities = cities.filter(el => {
      return el.name !== city
    })
    setCities(newCities)
  }

  return (<div className='main'>
    <img src={sun} className='sun' />
    <Form getWeather={getWeather}/>
    <Weather cities={cities} deleteWeather={deleteWeather} />
  </div>)
}

export default App;
