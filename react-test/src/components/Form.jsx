import React from "react"
import {Form, Button, Container, Row} from "react-bootstrap"

function TestForm(){

    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    })

    console.log(formData)

    function handleForm(event){
        // console.log("changed")
        // console.log(event.target.value)
        const {name, value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }


    return (

    <Container >
        {/* <h1>hi</h1> */}
        <Row>
        <Form />
            {/* <h1>Hii</h1> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleForm} name="email" value={formData.email}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handleForm} name="password" value={formData.password}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Row>
    </Container>
    )


}

export default TestForm