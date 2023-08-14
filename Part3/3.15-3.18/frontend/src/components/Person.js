const Person=({person, handleDeleteClick})=>{
    
    return(
        <div className = 'personLine'>
           

 {person.name} {person.number} <button onClick={handleDeleteClick}>Delete</button></div>



)


    
}

export default Person;