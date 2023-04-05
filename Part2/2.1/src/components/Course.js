
const Header= (props)=>{
    return(
        <div>
            <h1>{props.headerText}</h1>
        </div>
    )
}

const Content= (props)=>{
    let parts= props.course.parts
    return(
        <div>
             <ul>
        {parts.map(part => 
          <Part key={part.id} contentText={part.name}  exercises={part.exercises}/>
        )}
        </ul>
        </div>
    )
}

const Part= (props)=>{
    return(
        <div>
           <h3>
            {props.contentText}  {props.exercises} </h3>

        </div>
    )
}

const Course =(props)=>{
   let headerText= props.course.name
      
    return(
        <div>
            <Header headerText= {headerText}></Header>
            <Content course= {props.course}></Content>
           
      

        </div>
    )

} 

export default Course