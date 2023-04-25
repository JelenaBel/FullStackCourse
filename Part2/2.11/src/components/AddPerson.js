const AddPerson= (props)=>{
    return(
        <div>
     
      <form>
        <div>
          name: <input value = {props.newName} onChange= {props.createNewName}/>
        </div>
        <div>
          phone: <input value = {props.newPhone} onChange= {props.createNewPhone}/>
        </div>
        <div>
          <button type="submit" onClick = {props.addPerson}>add</button>
        </div>
      </form>
     
      
    </div>

    );
}
export default AddPerson;