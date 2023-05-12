import {useState, useEffect} from 'react'

const Searched =(props)=>{
    return (
        <form>
<div>
    search:  
        <input value= {props.searched} onChange= {props.handleSearchedChange}></input>
        </div>
        </form>
    )
}

export default Searched;