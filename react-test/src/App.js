import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Form, Button, Container} from "react-bootstrap"
import TestForm from "./components/Form";

function App(){

  const [count, setCount] = React.useState(0);

  // function handleCount(){

    // setCount(prevCount => prevCount+1)
  // }

  React.useEffect(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div>
      <TestForm />

      <h1>{count}</h1>
      <button >Change Count</button>

    </div>
  ) 
}

export default App;