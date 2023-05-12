const Person=({person, handleDeleteClick})=>{
    
    return(
        <div>
           

{person.id} {person.name} {person.phone} <button onClick={handleDeleteClick}>Delete</button></div>



)


    
}

export default Person;