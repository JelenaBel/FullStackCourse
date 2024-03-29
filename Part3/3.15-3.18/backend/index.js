require('dotenv').config()

const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')
app.use(express.static('build'))
app.use(express.json())
app.use(cors())



app.use(morgan(function (tokens, req, res) {
    return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body),
  
  ].join(' ')
}))

app.get('/info', (request, response) => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();
  date= new Date(year, month, day, hours, minutes, seconds);
  
  Person.find({}).then(persons=> 
   
    response.send( "<h4>Phonebook has info for "+ persons.length + " people</h4><h4>" + date +"</h4>")
    )
  
  
})

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


app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
console.log (request.body)
  const person = {
    name: body.name,
    number: body.phone,
  }

  Person.findByIdAndUpdate(request.params.id, person)
    .then(updatedPerson => {
      response.json(updatedPerson).header()
      })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person =>  {
      if (person) {
      response.json(person)
      
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
  })

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
    console.log(body.name, body.number)
  
    const person = {
      name: body.name,
      number: body.number,
    }
  
    Person.findByIdAndUpdate(request.params.id, person, { new: true })
      .then(updatedPerson => {
          response.json(updatedPerson)
      })
      .catch(error => next(error))
  })
  
  

  app.delete('/api/persons/:id', (request, response, next) => {
    console.log("id for deletion", request.params.id)
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
  
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

  app.use(errorHandler)
  
  const PORT = process.env.PORT
  console.log('PORT', PORT)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})