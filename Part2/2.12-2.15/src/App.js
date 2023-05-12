import { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson'
import PersonsList from './components/PersonsList'
import Searched from './components/Searched'
import axios from 'axios'
import personsService from './services/persons'


const App = () => {
  
  const [persons, setPersons] = useState([ ])
  const [person, setPerson]= useState({'name':'', 'phone': '' })
  useEffect(() => {
    personsService
      .getPersons()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  
      
  let already=false
  
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newSearched, setNewSearched] = useState('')
  const [showAll, setShowAll] = useState(true)

  const createNewSearched= (event) => {
    setNewSearched(event.target.value) 
    setShowAll(false)
  }


  const createNewName= (event) => {
    setNewName(event.target.value) 
  }

  const createNewPhone= (event) => {
    setNewPhone(event.target.value) 
  }


  const addPerson = (event)=> {
    event.preventDefault()
    let i=0
    for(i=0; i<persons.length; i=i+1){
      console.log( 'name of the person', persons[i].name, i)
      console.log( 'name of the person from Form', newName, i)
      
      if (persons[i].name===newName){
        console.log('the names are the same')
        already=true
         
    }
  }
    console.log('already', already)


  if (already===false){
    
    const newPerson= {
      'name': newName,
      'phone': newPhone, 
      
    }
    personsService
    .createNewPerson(newPerson)
    .then(returnedPerson => {
      console.log(returnedPerson)
      setPersons(persons.concat(returnedPerson))
         
    })
   
    console.log('length', persons.length)
    setNewName('')
    setNewPhone('')
    already=false
  
}else {
  const question= window.confirm(`${newName} is already added to phonebook, replace the old number with a new one? `)
  if (question){
  const updatedPerson= persons.find (person=> person.name===newName)
  const changePerson = { ...updatedPerson, phone: newPhone }
  personsService
  .updatePerson(updatedPerson.id, changePerson)
  setPersons(persons.map(person => person.name !== newName ? person : changePerson))
  } 

  
}}


const handleDeleteClickOf=(id)=>{
  const personDelete = persons.find(person=> person.id===id)
   
  const question= window.confirm(`Do you want to delete ${personDelete.name}`)
  
  console.log ('persone for delete', personDelete)
  if (question){
   
    personsService
    .deletePerson(id)
    
  }
}

const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newSearched.toLowerCase()))


  

  return (
    <div>
      <h2>Phonebook</h2>
<Searched newSearched={newSearched} createNewSearched= {createNewSearched}/>
          
     
        <AddPerson newName={newName} newPhone={newPhone} createNewName ={createNewName} createNewPhone ={createNewPhone} addPerson ={addPerson}/>
       <PersonsList personsToShow={personsToShow} handleDeleteClickOf={handleDeleteClickOf}/>
      </div>
  )
}


export default App;