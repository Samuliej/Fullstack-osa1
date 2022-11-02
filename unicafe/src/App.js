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

const Display = (props) => (
  <div>
    <p>{props.text}: {props.value}</p>
  </div>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = () => setGood(good +1)
  const setNeutralValue = () => setNeutral(neutral +1)
  const setBadValue = () => setBad(bad +1)

  return (
    <div>
        <Header text={"give feedback"}></Header>
        <Button handleClick={() => setGoodValue()} text="good"></Button>
        <Button handleClick={() => setNeutralValue()} text="neutral"></Button>
        <Button handleClick={() => setBadValue()} text="bad"></Button>
        <Header text={"statistics"}></Header>
        <Display text="good" value={good}></Display>
        <Display text="neutral" value={neutral}></Display>
        <Display text="bad" value={bad}></Display>
    </div>
  )
}

export default App