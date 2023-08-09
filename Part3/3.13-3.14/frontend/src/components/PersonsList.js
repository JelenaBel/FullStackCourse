import Person from './Person'

const PersonsList=(props)=>{
    return(
        <div>
            <h2>Numbers</h2>

{props.personsToShow.map((person, index)=> 
<ul>

<ul key= {index}> <Person person={person} handleDeleteClick={()=>props.handleDeleteClickOf(person.id)}></Person></ul>


</ul>

)}
</div>

    )
}

export default PersonsList;