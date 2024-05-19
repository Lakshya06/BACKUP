import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

function Certifactes(){
    return (
        <Container fluid>
            {/* <h1>hi</h1> */}
            <Row>
                <Col xs={9} className="text-center">
                    <h1 className="my-4">Your Certificates</h1>

                    <Row className="my-3">

                        <Col xs={6} md={4} className="my-3">
                            <Image src={require("../images/certExample2.jpg")} fluid ></Image>
                        </Col>

                        <Col xs={6} md={4} className="my-3">
                            <Image src={require("../images/certExample2.jpg")} fluid ></Image>
                        </Col>

                        <Col xs={6} md={4} className="my-3">
                            <Image src={require("../images/certExample2.jpg")} fluid ></Image>
                        </Col>

                        <Col xs={6} md={4} className="my-3">
                            <Image src={require("../images/certExample2.jpg")} fluid ></Image>
                        </Col>

                        <Col xs={6} md={4} className="my-3">
                            <Image src={require("../images/certExample2.jpg")} fluid ></Image>
                        </Col>

                        <Col xs={6} md={4} className="my-3">
                            <Image src={require("../images/certExample2.jpg")} fluid ></Image>
                        </Col>

                    </Row>
                </Col>

                <Col xs={3} className="userDetails text-center">

                    <h1 className="my-4">User Details</h1>
                    <Image fluid src={require("../images/userImage.png")} alt="User-image" className="my-3"></Image>
                    <h4>Arnav </h4>
                    <br/>
                    <h4>arnav@meetha.com</h4>
                    <Button variant="danger" className="my-3">Log Out</Button>

                </Col>
            </Row>
        </Container>
    )
}

export default Certifactes