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


const Statistics = (props) => {
  if (props.value === 0) {
    return (<div></div>)
  }
  return (
    <div>
      <p>{props.text}: {props.value}</p>
    </div>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const setGoodValue = () => {setGood(good +1); setAll(allClicks+1) }
  const setNeutralValue = () => {setNeutral(neutral +1); setAll(allClicks +1)}
  const setBadValue = () => {setBad(bad +1); setAll(allClicks+1) }

  // apufunktiot
  const getAverage = () => allClicks !== 0 ? ((good - bad) / allClicks) : 0
  const getPositive = () => allClicks !== 0 ? ((good * 100) / allClicks) : 0
  

  return (
    <div>
        <Header text={"give feedback"}></Header>
        <Button handleClick={() => setGoodValue()} text="good"></Button>
        <Button handleClick={() => setNeutralValue()} text="neutral"></Button>
        <Button handleClick={() => setBadValue()} text="bad"></Button>
        <Header text={"statistics"}></Header>
        <Statistics text="good" value={good}></Statistics>
        <Statistics text="neutral" value={neutral}></Statistics>
        <Statistics text="bad" value={bad}></Statistics>
        <Statistics text="all" value={allClicks}></Statistics>
        <Statistics text="average" value={getAverage()}></Statistics>
        <Statistics text="positive" value={getPositive()}></Statistics>
    </div>
  )
}

export default App