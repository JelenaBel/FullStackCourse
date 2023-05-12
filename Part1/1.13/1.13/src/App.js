import { useState } from 'react'

const Button = (props) =>{
  return (
    <div>
      <button onClick={props.handleclick}>Next anecdote</button>
    </div>
  )
}
const ButtonVote= (props)=>{
  return (
    <div>
      <button onClick={props.handleclick}>Vote</button>
    </div>
  )

}

const App = () => {
  const[votes, setVotes]= useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0})
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const handleclick = ()=>{
    var min = 0
    var max= anecdotes.length-1
    setSelected( () => randomNumberInRange (min, max))
  }

  function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const handleclickvote = ()=>{
      
        const copy = {...votes}
        copy[selected]=copy[selected]+1
        setVotes(copy)
        
      }
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      
      {anecdotes[selected]}
      <h4>has  {votes[selected]} votes</h4>
      <p>
      <span>
      <Button handleclick={handleclick}></Button></span>
      <span><ButtonVote handleclick={handleclickvote}></ButtonVote></span>
      </p>
      
    </div>
  )
}



export default App;

