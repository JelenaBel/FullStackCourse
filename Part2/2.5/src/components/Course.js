
import Content from './Content.js'


const Header= (props)=>{
    return(
        <div>
            <h1>{props.headerText}</h1>
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