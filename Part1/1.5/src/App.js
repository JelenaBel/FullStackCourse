const Part =(props)=>{
  return(
    <div>
       <h3>{props.name}  {props.exercise} exercises</h3> 
    </div>
  )
}

const Header =(props)=>{
  return(
    <div>
      <h1> {props.course}</h1>
           
    </div>
  )
}

const Content =(props)=>{
  return(
    <div>
      <Header course ={props.course} />
      <Part name={props.parts[0].name} exercise= {props.parts[0].exercises}></Part>
      <Part name={props.parts[1].name} exercise= {props.parts[1].exercises}></Part>
      <Part name={props.parts[2].name} exercise= {props.parts[2].exercises}></Part>
     
    </div>
  )
}

const Total =(props)=>{
  return(
    <div>
      <h3> Total: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} exercises</h3> 
      
           
    </div>
  )
}


const App = () => {


  const course = 'Half Stack application development'
  

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]



 
    return (
           <div>
          <Header course={course} />
          <Content parts={parts} />
          <Total parts={parts} />
        </div>
      )
    }
   


export default App
