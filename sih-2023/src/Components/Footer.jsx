import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer(){
    return (
        <Container fluid className="footer mt-5">

            <Row className="text-center pt-5">
                <p>Copyright © 2023 Certify</p>
            </Row>
        </Container>
    )
}

export default Footer