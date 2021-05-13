import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./About.css";
import Profile from "../Asst/IMG_0678.JPG";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
    return (
        <div id="about">
            <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3 design">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <h3>Hi there ! I am</h3><strong>Mohammad Mohibur Rahman</strong>
                <hr />
                <br />First of all, I would love to introduce myself. I m done Graduation on Business Management Platfrom from Sunderland University London . Im currently Working On ASDA retail market in London Canary-Wharf.
                <br />
                
                <br/>
                Besides, I am a MERN stack developer. I have a good knowledge in JavaScript. I feel comfort to work with React.js and I also know Express.js and MongoDB Database Management.
                <br />
               
                <br />
               
                <br />
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/16fJNlpnUzm93rwBh8W4R-BYWGkLnkv9h/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/mohibuslc" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/anand-kumar-jha-745798a4/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
            
        </div>
    );
};

export default About;