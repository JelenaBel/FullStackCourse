require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const Person = require('./models/person')



app.use(cors())
app.use(express.json())
app.use(express.static('build'))



app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log (request.body)
  
    if (body.name === undefined) {
      return response.status(400).json({ error: 'name missing' })
    }
  
    const person = new Person({
      name: body.name,
      number: body.phone 
    })
  
    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
  })

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})
    
  
  const PORT = process.env.PORT
  console.log('PORT', PORT)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})