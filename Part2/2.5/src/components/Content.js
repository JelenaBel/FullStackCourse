import Part from './Part'

const Content= (props)=>{
    let parts= props.course.parts
    const initialValue = 0;
    const sum=  parts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.exercises,
      initialValue
    );
    
    return(
        <div>
             <ul>
        {parts.map(part => 
          <Part key={part.id} contentText={part.name}  exercises={part.exercises}/>
        )}
        </ul>
        <ul>
        <h3>Total of  {sum} exersices</h3>
        </ul>
        </div>
    )
}

export default Content