
const WeatherForecast = (props)=> {
    let icon=props.weather[3]
    let iconUrl= "https://openweathermap.org/img/wn/"+icon+"@4x.png"
    return (
        <div>
            <h1>Weather in {props.country.capital}</h1>
            <p>{props.weather[0]}</p>
            
                <img src= {iconUrl} />
                  
                 
            <p> temperature {props.weather[1]} Celsius</p>
            <p> wind {props.weather[2]} m/s</p>

        </div>
    )

}
export default WeatherForecast;