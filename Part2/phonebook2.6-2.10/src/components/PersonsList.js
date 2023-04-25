const PersonsList=(props)=>{
    return(
        <div>
            <h2>Numbers</h2>

{props.personsToShow.map((person, index)=> 

<ul key= {index}> {person.id} {person.name} {person.phone}</ul>

)}
</div>

    )
}

export default PersonsList;
