
const Searched=(props)=>{
    return(
<form>
<div>
          search: <input value = {props.newSearched} onChange= {props.createNewSearched}/>
        </div>

</form>
    )

}

export default Searched;