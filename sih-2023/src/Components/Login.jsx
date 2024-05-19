import React from "react";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import svg from "../images/password3.svg"

function Login(){

    const [formData, setFormData] = React.useState({
        username: "",
        password: ""
    })

    function handleSubmit(event){
        event.preventDefault()
        console.log(event.target.value)
    }

    return (
    <div>
    {/* <h1>jfkdjf</h1> */}
        <Container className="pt-3">
            <Row>

            <Col className="text-center">
                <h1>Welcome to Certify</h1>
                <br/>
                {/* <!-- <h3>Login to Continue..</h3> --> */}
            </Col>

            </Row>
        </Container>
        <Container className="py-3 h-100 loginForm">
            <Row className="d-flex align-items-center justify-content-center h-100">
                <Col md={7} lg={7} xl={6}>

                    {/* <h1>jkjk</h1> */}
                    {/* <img src={require("../images/password3.svg")} alt="" className="img-fluid"/> */}
                    {/* <Image src={require("../images/password3.svg")}></Image>     */}
                    <svg class='search__icon'>
         <use xlinkhref={`${svg}#icon-magnifying-glass`} />
       </svg>
                </Col>
                <Col md={7} lg={5} xl={5} className="offset-xl-1">
                    <h2 className="text-center pb-5">Enter your credentials</h2>
                    
                    <Form>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="loginEmail"><i className="fa-solid fa-user mx-2"></i>Username</label>
                            <input type="text" id="loginEmail" className="form-control form-control-lg" name="username"/>
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="loginPass"><i className="fa-solid fa-lock mx-2"></i>Password</label>
                            <input type="password" id="loginPass" className="form-control form-control-lg" name="password"/>
                        </div>

                        <Row>
                            <Col xs={4} md={6}>
                                <button type="submit" className="btn btn-lg btn-block mb-3">Sign in</button>
                            </Col>
                            <Col xs={8} md={6} className="pt-3">
                                <a id="registerRedirect" href="/register"><h6>Don't have an account? <b>Register</b></h6></a>
                            </Col>
                        </Row>

                        <hr className="py-3"/>

                        <div className="row googleLogin">

                            <a className="btn btn-lg btn-block" href="/auth/google"
                                role="button">
                                <i className="fa-brands fa-google mx-3"></i>Continue with Google
                            </a>

                        </div>

                    </Form>
                </Col>

            </Row>
        </Container>
    </div>)
}

export default Login