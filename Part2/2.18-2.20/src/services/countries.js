import axios from 'axios'
const baseUrl = 'https://restcountries.com/v3.1/all'

const getCountries = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const getWeatherForecast = (latitude, longitude) => {
    
    const lon = longitude
    const lat= latitude
    console.log ('latitude to axios', lat)
    console.log ('Longitude to axios', lon)
    const part = ['minutely','hourly','daily','alerts']
    
    const request = axios.get(``)
    
    return request.then(response => response.data)
}



export default { 
    getCountries, 
    getWeatherForecast 
    
}