import { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson'
import PersonsList from './components/PersonsList'
import Searched from './components/Searched'
import Notification from './components/Notification'
import axios from 'axios'
import personsService from './services/persons'
import Footer from './components/Footer'


const App = () => {
  
  const [persons, setPersons] = useState([ ])
  const [person, setPerson]= useState({'name':'', 'phone': '' })
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorStyle, setErrorStyle]= useState(null)

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
      setErrorStyle('positive')
      setErrorMessage(`${newName} was successfully added`)
      
      setTimeout(() => {
        setErrorMessage(null)
        setErrorStyle(null)
      }, 3000)
         
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
  .updatePerson(updatedPerson.id, changePerson).then(updatedPerson => {
    setPersons(persons.map(person => person.name !== newName ? person : changePerson))
  })

  
  .catch(error => {
    setErrorStyle('negative')
    setErrorMessage(
      `Person '${newName}' was already removed from server`  
    )
    
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
    setPersons(persons.filter(n => n.name !== newName))
  })

  
}}
  }


const handleDeleteClickOf=(id)=>{
  const personDelete = persons.find(person=> person.id===id)
   
  const question= window.confirm(`Do you want to delete ${personDelete.name}`)
  
  console.log ('persone for delete', personDelete)
  if (question){
   
    personsService
    .deletePerson(id)
    setPersons(persons.filter(n => n.id !== id))
    
  }
}

const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newSearched.toLowerCase()))


  

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} styleOption={errorStyle}/>
<Searched newSearched={newSearched} createNewSearched= {createNewSearched}/>
          
     
        <AddPerson newName={newName} newPhone={newPhone} createNewName ={createNewName} createNewPhone ={createNewPhone} addPerson ={addPerson}/>
       <PersonsList personsToShow={personsToShow} handleDeleteClickOf={handleDeleteClickOf}/>
       <Footer></Footer>
      </div>
  )
}


export default App;