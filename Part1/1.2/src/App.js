const Part =(props)=>{
  return(
    <div>
       <h3>{props.name}   {props.exercise} exercises</h3> 
    </div>
  )
}



const Content =(props)=>{
  return(
    <div>
      <Part name={props.content[0].name} exercise= {props.content[0].exercises}></Part>
      <Part name={props.content[1].name} exercise= {props.content[1].exercises}></Part>
      <Part name={props.content[2].name} exercise= {props.content[2].exercises}></Part>
     
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


  
  const content = [
    {'name':part1, 'exercises':exercises1 }, 
    {'name':part2, 'exercises':exercises2 },
    {'name':part3, 'exercises':exercises3 },
  ]


 
    return (
      <div>
        
        <Content content ={content} />
        
      </div>
    )
  }


export default App
