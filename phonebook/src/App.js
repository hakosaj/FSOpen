import React, { useState, useEffect } from 'react'
import peopleService from './services/persons'
import Person from './components/Person'



const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ numbers, setNumbers ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  const hook = () => {
    peopleService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  const handleNameChange = (event) => {
    console.log(event.target.value," name")
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value," number")
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target," name")
    const nameObject = {
        name: newName,
        number: newNumber, 

    }

    if (persons.find(x=> x.name===nameObject.name)) {
        window.alert(`${newName} is already added to phonebook`)
    }else {
        setPersons(persons.concat(nameObject))
        peopleService
         .create(nameObject)
         .then(response=> {
           console.log(response)
         })
    }

    setNewName('')
    addNumber(event)
  }

  const toggleDelete = (id) => {
    if(window.confirm("perkele")) {
    console.log("index:"+ persons.indexOf(persons.find(n=>n.id===id)))
    peopleService
      .del(id)
      .then(response=> {
        console.log(response)
      })
    }
  }


    const addNumber = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const numberObject = {
        number: newNumber, 
        id: numbers.length+1
    }

        setNumbers(numbers.concat(numberObject))

    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit= {addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}></input>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
         {persons.map(person=> 
         <Person
         key={person.id}
         person={person}
         toggleDeletion={() => toggleDelete(person.id)}
         />
         )}

    </div>
  )
}

export default App
            //{numbers.map(number=> <div key={number.number.toString()}> {number.number}</div>)}