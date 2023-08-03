const Person=({person, handleDeleteClick})=>{
    
    return(
        <div className = 'personLine'>
           

{person.id} {person.name} {person.phone} <button onClick={handleDeleteClick}>Delete</button></div>



)


    
}

export default Person;