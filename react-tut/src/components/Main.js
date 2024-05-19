import React from "react";


function Main(props){
  const [name, setName] = React.useState(0);
  function increment(){
    return(
      setName( prev => {return prev+1} )
    )
  }
    return(
        <main>

          <button onClick={increment}>click</button>

        {/* <img src="./reactLogo.png" alt="reatc-logo" width="40px"></img> */}
          <h1 className="main-title">Fun Facts about react</h1>

          <h1>{props.Name}</h1>
          <h2>{name}</h2>
      
          <ul className="main-facts">
            <li>
              Was first released in 2013
            </li>
            <li>
              Was originally created by Jordan Walke
            </li>
            <li>
              Has well over 100K stars on Github
            </li>
            <li>
              Is maintained by Facebook
            </li>
            <li>
              Powers thousands of enterprise apps, including mobile apps
            </li>
      
          </ul>
      
        </main>
    )
}

export default Main