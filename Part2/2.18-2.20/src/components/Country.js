import { useState, useEffect } from 'react'

const Country = ({country, handleShow})=> {
        return(
        <div>
            <span>{country.name.common}</span><button onClick= {handleShow}> show</button>
           
        </div>
        
    )

}

    
export default Country;