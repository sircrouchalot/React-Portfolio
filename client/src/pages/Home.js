import React from "react";
import { Row, Col } from "reactstrap";
import "./Home.css";

function Home() {
    return (
        <Row>
            <Col xs="12" sm="10">
            <h1 className="animate__animated animate__bounce greeting">Welcome to my portfolio!</h1>
            <h6 className="animate__animated animate__bounce greetingSub">
                <ul className="links">
                    <li style={{display: "inline-block", marginLeft: "2px"}}><a style={{color: "black"}} href="/about">About Me | </a></li>
                    <li style={{display: "inline-block", marginLeft: "2px"}}><a style={{color: "black"}} href="/portfolio"> See what I've been up to! | </a></li>
                    <li style={{display: "inline-block", marginLeft: "2px"}}><a style={{color: "black"}} href="mailto:acrouch06@gmail.com"> Send me an email!</a></li>
                </ul>
            </h6>
            </Col>
        </Row>
    );
}

export default Home;