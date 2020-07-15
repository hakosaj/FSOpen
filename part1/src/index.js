import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {

  return (
    <div>
      <p> Hello {props.name}, age: {props.age} years old. </p>
    </div>
    )
  }

  const App = () => {
    const name = "beter"
    const age = 20
    return (
      <>
        <h1> Header!</h1>
        <Hello name="sasa" age = {20}/>
        <Hello name={name} age={age}/>

      </>
    )
  }




ReactDOM.render(<App/>, document.getElementById('root'))