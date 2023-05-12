import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const createNewPersone= (event) => {
        setNewName(event.target.value) 
    console.log(newName)
    
  }
  
  const addPerson = (event)=> {
    event.preventDefault()
    const newPerson= {
      'name': newName
    }
    setPersons(persons.concat(newPerson))
    console.log('length', persons.length)
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value = {newName} onChange= {createNewPersone}/>
        </div>
        <div>
          <button type="submit" onClick = {addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index)=>
      <ul key= {index}> {person.name}</ul>
      )}
    </div>
  )
}

export default App