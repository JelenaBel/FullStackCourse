import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/all'

const getCountries = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const getWeatherForecast = (latitude, longitude) => {
    const api_key = process.env.REACT_APP_API_KEY    
    const lon = longitude
    const lat= latitude
    console.log ('latitude to axios', lat)
    console.log ('Longitude to axios', lon)
    const part = ['minutely','hourly','daily','alerts']
    
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    
    return request.then(response => response.data)
}



export default { 
    getCountries, 
    getWeatherForecast 
    
}