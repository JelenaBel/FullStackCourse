import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/all'

const getCountries = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const getWeatherForecast = (latitude, longitude) => {
    const apiKey = '58c5810c618839090cd5f737fc789baf'
    const lon = longitude
    const lat= latitude
    console.log ('latitude to axios', lat)
    console.log ('Longitude to axios', lon)
    const part = ['minutely','hourly','daily','alerts']
    
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8ee70c6c502e1ac9c42c1f4203e3dfed`)
    
    return request.then(response => response.data)
}



export default { 
    getCountries, 
    getWeatherForecast 
    
}