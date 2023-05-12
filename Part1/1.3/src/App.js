const Part =(props)=>{
  return(
    <div>
       <h3>{props.name}  {props.exercise} exercises</h3> 
    </div>
  )
}



const Content =(props)=>{
  return(
    <div>
      <h1> {props.content[3].course}</h1>
      <Part name={props.content[0].part1.name} exercise= {props.content[0].part1.exercises}></Part>
      <Part name={props.content[1].part2.name} exercise= {props.content[1].part2.exercises}></Part>
      <Part name={props.content[2].part3.name} exercise= {props.content[2].part3.exercises}></Part>
     
    </div>
  )
}




const App = () => {


  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  const content = [
    {part1 }, 
    {part2 },
    {part3 },
    {course}
  ]


 
    return (
      <div>
        
        <Content content ={content} />
        
      </div>
    )
  }


export default App
