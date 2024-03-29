const express = require('express')
var morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.static('build'))

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


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    },
    { 
      "id": 5,
      "name": "Hara Poppendieck", 
      "number": "39-23-6423122"
    }
]



const generateId = () => {
    const maxId = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

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
       
    const  number = persons.length;
    const first = "<h4>Phonebook has info for "+number+ " people</h4><h4>" + date +"</h4>"
    response.send(first)
  })
  

 
app.post('/api/persons', (request, response) => {
    const body = request.body;
    console.log(request.headers);
    
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }
    const already= persons.find(n=>n.name===body.name)
    if (already) {
        return response.status(400).json({ 
          error: 'name must be unique' 
        })
        
      }
    if (!body.number) {
        return response.status(400).json({ 
          error: 'number missing' 
        })
      }
  
    const person = {
      name: body.name,
      number:body.number,
      id: generateId()
    }
  
    persons = persons.concat(person)
  
    response.json(person)
 
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.filter(person => person.id !== id)
    
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})