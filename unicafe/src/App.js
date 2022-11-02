import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)

const Header = (props) => (
  <h1>
    {props.text}
  </h1>
)

const StatisticsLine = (props) => {
  if (props.extra === null) {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    ) 
  }
  return (
    <tr>
    <td>{props.text}</td>
    <td>{props.value} {props.extra}</td>
  </tr>
  )
}


const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (<div><strong>No feedback given</strong></div>)
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text="good" value={props.good}></StatisticsLine>
        <StatisticsLine text="neutral" value={props.neutral}></StatisticsLine>
        <StatisticsLine text="bad" value={props.bad}></StatisticsLine>
        <StatisticsLine text="average" value={getAverage(props.good, props.bad, props.allClicks)}></StatisticsLine>
        <StatisticsLine text="positive" value={getPositive(props.good, props.allClicks)} extra="%"></StatisticsLine>
      </tbody>
    </table>
  )
}

// Vinkkiä onko järkevä suunnitella apufunktioita näin?
// vai sijoittaa apufunktiot appiin ja sieltä heitellä suoraan ulkoisille 
// komponenteille arvot?
const getAverage = (val1, val2, valCombined) => 
  valCombined !== 0 ? Math.round(((val1 - val2) / valCombined) * 100) / 100 : 0

const getPositive = (val1, valCombined) => 
  valCombined !== 0 ? Math.round(((val1 * 100) / valCombined) * 100) / 100 : 0

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const setGoodValue = () => {setGood(good +1); setAll(allClicks+1) }
  const setNeutralValue = () => {setNeutral(neutral +1); setAll(allClicks +1)}
  const setBadValue = () => {setBad(bad +1); setAll(allClicks+1) }

  return (
    <div>
        <Header text={"give feedback"}></Header>
        <Button handleClick={() => setGoodValue()} text="good"></Button>
        <Button handleClick={() => setNeutralValue()} text="neutral"></Button>
        <Button handleClick={() => setBadValue()} text="bad"></Button>
        <Header text={"statistics"}></Header>
        <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}></Statistics>
    </div>
  )
}

export default App