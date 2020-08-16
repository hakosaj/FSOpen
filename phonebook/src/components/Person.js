import React from 'react'

const Person = ({ person, toggleDeletion }) => {
  
    return (
        <div>
            {person.name}  {person.number}   <button onClick={toggleDeletion}>{'Delete'}</button>
        </div>
    )
  }


  export default Person