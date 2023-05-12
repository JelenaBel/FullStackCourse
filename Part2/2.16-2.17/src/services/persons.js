import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createNewPerson = (newPerson) => {
    console.log('save new persin service function call')
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const updatePerson = (id, newObject) => {
    const request= axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
  
}

const deletePerson=(id)=>{
    
    const request= axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}


export default { 
    getPersons, 
    createNewPerson,
    updatePerson,
    deletePerson
}