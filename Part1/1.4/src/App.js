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
      <h1> {props.course.course}</h1>
           
    </div>
  )
}

const Content =(props)=>{
  return(
    <div>
      <Header course ={props.course} />
      <Part name={props.course.parts[0].name} exercise= {props.course.parts[0].exercises}></Part>
      <Part name={props.course.parts[1].name} exercise= {props.course.parts[1].exercises}></Part>
      <Part name={props.course.parts[2].name} exercise= {props.course.parts[2].exercises}></Part>
     
    </div>
  )
}

const Total =(props)=>{
  return(
    <div>
      <h3> Total: {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises} exercises</h3> 
      
           
    </div>
  )
}


const App = () => {


  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


 
    return (
           <div>
          <Header course={course} />
          <Content parts={course} />
          <Total parts={course} />
        </div>
      )
    }
   


export default App
