const Header =(props)=>{
  return(
    <div>
      <h1>{props.course}</h1> 
    </div>
  )
}



const Content =(props)=>{
  return(
    <div>
      <h3>{props.content}   {props.exercise} exercises</h3> 
    </div>
  )
}

const Total =(props)=>{

  return(
    <div>
      <h4>Total: {props.total}</h4> 
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

 
    return (
      <div>
        <Header course={course} />
        <Content content={part1}exercise = {exercises1} />
        <Content content={part2}exercise = {exercises2} />
        <Content content={part3}exercise = {exercises3} />
        <Total total = { exercises1+exercises2+exercises3} />
      </div>
    )
  }


export default App
