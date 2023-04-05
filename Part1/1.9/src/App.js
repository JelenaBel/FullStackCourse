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

const Statistics= (props) =>{
  if (props.good!=0 || props.bad!=0 || props.neutral!=0){
  let total = (props.good+props.bad+props.neutral)
  let average = 0
  let positive = 0
if (total!=0){
  average = (props.good/total)
  positive = (props.good-props.bad)/total
}


  return (
    <div>
    <div>Total {total}</div>
    <div>Average {average}</div>
    <div>Positive {positive}</div>
    </div>
  
  )
  }
  else{
    return (
    <div>
    <h4>No feedback given</h4>
    </div>
    )

  }
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
      <Statistics good ={good} bad={bad} neutral ={neutral}/>
      
    </div>
  )
}

export default App;