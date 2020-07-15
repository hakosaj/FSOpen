import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = (props) => {
  return(
    <div>
      {props.text} {props.value}
    </div>
  )
}

const Statistics = (props) => {

  let good=props.pr[0]
  let neutral=props.pr[1]
  let bad=props.pr[2]
  if (good+neutral+bad!==0) {
    return (
      <div>
      <b>statistics</b>
      <div>
        <Statistic text="good" value={good}/> 
        <Statistic text="neutral" value={neutral}/> 
        <Statistic text="bad" value={bad}/> 
        <div>
          all {good+bad+neutral}
        </div>
        <div>
          average {(good-bad)/(good+bad+neutral)}
        </div>
        <div>
          positive {100*(good/(good+bad+neutral))}%
        </div>

      </div>
    </div>
      )
  }else {
    return(
      <div> No feedback given</div>
    )
  }

}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <b>give feedback </b>
      <div>
          <Button onClick={handleGoodClick} text='good' />
          <Button onClick={handleNeutralClick} text='neutral' />
          <Button onClick={handleBadClick} text='bad' />
      </div>
      <Statistics pr={[good,neutral,bad]}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)