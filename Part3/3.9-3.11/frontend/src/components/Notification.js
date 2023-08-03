const Notification = ({ message, styleOption }) => {
    if (message === null) {
      return null
    }
   
    if (styleOption=='positive'){
     
    return (
      <div style={{
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10}}
      >
        {message}
      </div>
    )
  }
  else{
    return (
        <div style={{
          color: 'red',
          background: 'lightgrey',
          fontSize: 20,
          borderStyle: 'solid',
          borderRadius: 5,
          padding: 10,
          marginBottom: 10}}
        >
          {message}
        </div>
      )

  }
}

  export default Notification;