import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Anecdote = (props) => (
    <p><strong><em>
      {props.text}
    </em></strong></p>
)

const Votes = (props) => (
  <p>
    has {props.value} votes
  </p>
)

const WinningAnecdote = (props) => (
  <Anecdote text={props.text}></Anecdote>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0])

  const setCurrentAnecdote = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const voteAnecdote = (index) => {
    const newVotes = [...votes]
    newVotes[index] += 1
    setVotes(newVotes)
  }

  const getWinningAnecdote = () => {
    const max = Math.max(...votes)
    const index = votes.indexOf(max)
    console.log(index)
    return index
  }

  console.log(votes)
  return (
    <div>
      <Anecdote text={anecdotes[selected]}></Anecdote>
      <Votes value={votes[selected]}></Votes>
      <Button text="vote" handleClick={() => voteAnecdote(selected)}></Button>
      <Button text="next anecdote" handleClick={() => setCurrentAnecdote()}></Button>
      <WinningAnecdote text={anecdotes[getWinningAnecdote()]}></WinningAnecdote>
    </div>
  )
}

export default App