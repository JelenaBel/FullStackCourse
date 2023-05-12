
import CountryDetailed from './ContryDetailed'

import Country from './Country'

const CountriesList = (props)=> {
    if (props.countries.length===1){
    return (
            <div>
             
                {props.countries.map((country, index)=> 
                <div>
    <ul>
    
    <ul key= {index} style = {{listStyleType: 'circle'}}>  
    <CountryDetailed country= {country} weather = {props.weather} handleBackAllCountries= {props.handleBackAllCountries}></CountryDetailed> 
    </ul>
    
    
    </ul>
            </div>
    )}
    </div>
    )
    }          
            
    else{
    return(
        <div>
            
            {props.countries.map((country, index)=> 
            <div>
<ul>

<ul key= {index} style = {{listStyleType: 'circle'}}>  
<Country country= {country} handleShow={()=>props.handleShowCountry(country.name.common)}></Country>
</ul>


</ul>
        </div>
        
    )
}
</div> 
    )
}
}

export default CountriesList;