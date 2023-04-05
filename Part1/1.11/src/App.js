import { useState } from 'react'

const Button = (props)=>{
  return (
    <div>
    <button onClick={props.handleClick}>
    {props.text}
    </button>
    </div>
  )
}

const StatisticLine = (props) =>{
  return(
    <>
      
      <td>{props.text}</td> <td>{props.value}</td>
    
    </>
  )
}

const Statistics= (props) =>{
  const good=props.good
  const bad=props.bad
  const neutral= props.neutral
  if (props.good!=0 || props.bad!=0 || props.neutral!=0){
  let total = (props.good+props.bad+props.neutral)
  let average = 0
  let positive = 0
if (total!=0){
  average = ((props.good/total)*1000)/1000
  positive = (((props.good-props.bad)/total)*1000)/1000
}
average=average.toFixed(2)
positive= positive.toFixed(2)
positive = positive+ '%'


  return (
    <div>
      <table>
        <tr>
      <StatisticLine text="good" value ={good} /></tr>
      <tr><StatisticLine text="neutral" value ={bad} /></tr>
      <tr><StatisticLine text="bad" value ={neutral} /></tr>
      <tr><StatisticLine text="total" value ={total} /></tr>
      <tr><StatisticLine text="average" value ={average} /></tr>
      <tr><StatisticLine text="positive" value ={positive} /></tr>
      </table>
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
     
      <Statistics good ={good} bad={bad} neutral ={neutral}/>
      
    </div>
  )
}

export default App;