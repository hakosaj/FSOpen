
const express = require('express')
const app = express()


app.use(express.json())

let persons= [
    {
      name: "gfgf",
      number: "2425",
      id: 1
    },
    {
      name: "hh",
      number: "8768769",
      id: 2
    },
  ]

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
    if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

const generateId = () => {
  return Math.floor(Math.random() * 100000);
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

  if (persons.find(person=>person.name===name)) {
    return response.status(400).json({
      error: 'Same name'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
})
app.get('/api/persons/', (request, response) => {
  response.json(persons)
  response.status(200).end()
})

app.get('/info',(request,response) => {
  const info = {
    restring:`Phonebook contains details of ${persons.length} people`,
    date: Date(Date.now())
  }
  response.json(info)
  response.status(200).end()
})


app.delete('/api/persons/:id',(request,response)=> {
  const id = Number(request.params.id)
  persons = persons.filter(person=>person.id!==id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})