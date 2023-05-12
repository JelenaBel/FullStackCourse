import { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson'
import PersonsList from './components/PersonsList'
import Searched from './components/Searched'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([ ])
  const [person, setPerson]= useState({'id': '', 'name':'', 'phone': '' })
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      
      .then(response => {
        const persons1= response.data
        console.log(persons1)
        setPerson(response.data)
        setPersons(response.data)
      })
  }, [])

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