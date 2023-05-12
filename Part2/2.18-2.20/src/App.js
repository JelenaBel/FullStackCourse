import { useState, useEffect } from 'react'
import axios from 'axios'
import countriesService from './services/countries'
import CountriesList from './components/CountriesList'
import Searched from './components/Searched'
      



const App = () => {
  
  const [countries, setCountries] = useState([ ])
  const [country, setCountry]= useState({'name':''})
  const [searched, setSearched]= useState('')
  const [showAll, setShowAll] = useState(true)
  const [weather, setWeather] = useState ([])
  

  const handleSearchedChange= (event) => {
    setSearched(event.target.value) 
    setShowAll(false)
    
  }


useEffect(() => {
  countriesService
    .getCountries()
    .then(initialCountries => {
      setCountries(initialCountries)
      console.log('readed info length', countries.length)
      })
}, [])

const handleFullList  = () =>{
  setSearched('')
  setShowAll(true)
}

const handleShowCountry = (nameCommon) =>{
  console.log('button was clicked')
  console.log('name of country where button was clicked', nameCommon)
  setShowAll(false)
  let countryToShow = countries.find (country=> country.name.common ===nameCommon)
  setSearched(nameCommon)
  const coord= countryToShow.capitalInfo.latlng
    const lat= coord[0]
    const lon= coord[1]
    console.log ('lat', lat)
    console.log ('lon', lon)
    countriesService
    .getWeatherForecast(lat, lon)
    
    .then(curWeather => {
      console.log('current weather was asked', curWeather)
      let main= curWeather.weather[0].description
      let temp= curWeather.main.temp
      let wind= curWeather.wind.speed
      let icon= curWeather.weather[0].icon
      let newWeather= [main, temp, wind, icon]
      setWeather(newWeather)
      
      
  })
}
  

const countriesToShow = showAll
  ? countries
  : countries.filter(country => country.name.common.toLowerCase().includes(searched.toLowerCase()))
  console.log('length of chosen countries array', countriesToShow.length)


  

return(
  <div>
      <h1> Countries </h1>
      <Searched searched= {searched} handleSearchedChange= {handleSearchedChange}/>
      <CountriesList countries={countriesToShow} handleShowCountry={handleShowCountry} handleFullList={handleFullList} weather= {weather}/>
      </div>

)
}

export default App;
