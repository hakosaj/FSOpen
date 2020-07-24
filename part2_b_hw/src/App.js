import React, { useState } from 'react'




const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [ numbers, setNumbers ] = useState([
    { number: '040-1234567' }
  ]) 


  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
        name: newName, 
        id: persons.length+1
    }

    if (persons.find(x=> x.name===nameObject.name)) {
        window.alert(`${newName} is already added to phonebook`)
    }else {
        setPersons(persons.concat(nameObject))

    }
    setNewName('')
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
      <form onSubmit={addName,addNumber}>
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
            {persons.map(person=> <div key={person.name.toString()}> {person.name}</div>)}
            {numbers.map(number=> <div key={number.number.toString()}> {number.number}</div>)}

    </div>
  )
}

export default App