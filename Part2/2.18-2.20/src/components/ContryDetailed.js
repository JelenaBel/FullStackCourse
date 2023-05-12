import WeatherForecast from './WeatherForecast'

const CountryDetailed = (props)=> {
    
    const row_languages= props.country.languages
    console.log('languages', row_languages)
    const languages= []
    for (const [key, value] of Object.entries(row_languages)){
        console.log('language key', key)
        console.log('language value', value)
        languages.push(value)

    }
    
       
        return (
            <div>
            <p>{props.country.name.common}</p>
            <p>Capital: {props.country.capital}</p>
            <p> Area: {props.country.area} km</p>
            <p> Population:  {props.country.population} </p>

            {languages.map( (language, index)=>
            <div>
            <ul key= {index}> 
            <li>{language}               

            </li></ul>
            </div>
            )

            }
            <br></br>
            <br></br>

            <img src={props.country.flags.png} alt="React Image" />
            <WeatherForecast country={props.country} weather = {props.weather}/>           
        </div>
        
    
        )
    

}

    
export default CountryDetailed;