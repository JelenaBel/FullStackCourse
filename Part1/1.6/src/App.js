import { useState } from 'react'





  
const Button = (props)=>{
  return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )
}
const ShowResult= (props) =>{
  return (
    <div>{props.result_type}  {props.result}</div>
  
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const countGood = ()=> setGood(good+1)
  const countNeutral = ()=> setNeutral(neutral+1)
  const countBad = ()=> setBad(bad+1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button 
      handleClick={countGood}
      text= 'Good'></Button>
       <Button 
      handleClick={countNeutral}
      text= 'Neutral'></Button>
       <Button 
      handleClick={countBad}
      text= 'Bad'></Button>
      <h3>Statistics</h3>
      <ShowResult 
      result_type='Good'
      result={good}></ShowResult>
       <ShowResult 
      result_type='Neutral'
      result={neutral}></ShowResult>
      <ShowResult 
      result_type='Bad'
      result={bad}></ShowResult>
      
      
      
    </div>
  )
}

export default App;