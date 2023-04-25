import { useState } from 'react'
import AddPerson from './components/AddPerson'
import PersonsList from './components/PersonsList'
import Searched from './components/Searched'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  let already=false
  const [newID, setNewID] = useState(5)
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
    setNewID(newID+1)
    const newPerson= {
      'name': newName,
      'phone': newPhone, 
      'id': newID
    }
    setPersons(persons.concat(newPerson))
    console.log('length', persons.length)
    setNewName('')
    setNewPhone('')
    already=false
  
}else {
  window.alert(`${newName} is already added to phonebook`);}}

const personsToShow = showAll
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(newSearched.toLowerCase()))


  

  return (
    <div>
      <h2>Phonebook</h2>
<Searched newSearched={newSearched} createNewSearched= {createNewSearched}/>
          
     
        <AddPerson newName={newName} newPhone={newPhone} createNewName ={createNewName} createNewPhone ={createNewPhone} addPerson ={addPerson}/>
       <PersonsList personsToShow={personsToShow}/>
      </div>
  )
}


export default App;