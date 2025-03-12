

function Main(){
    const username = "Aves F"
  
  const userStyles = {
    backgroundColor: "green",
    color: "white"
  }

    return(
     <div className= "main-content">
        <h1 style = {userStyles}>Welcome, {username}</h1>
            <ol>
                <li> I probably should know it </li>
                <li>I'm hoping it will make my life easier</li>
 
            </ol>
      </div>
    )
}
export default Main