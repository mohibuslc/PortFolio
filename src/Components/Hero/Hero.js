import React from "react";
import { Container } from "react-bootstrap";
import Typed from "react-typed";
import my from "../assets/IMG_0678.JPG";
import Button from 'react-bootstrap/Button';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <div className="person-img">
            <img src={my} alt="" />
          </div>
          <h1 className="title">Hello, I'm MOHAMMAD RAHMAN</h1>
          <h3 className="subtitle">
            <Typed strings={["MERN Stack Developer", "Web Designer", "Frontend Developer"]} typeSpeed={60} backSpeed={40} backDelay={1500} smartBackspace loop></Typed>
          </h3>
          <a  href="https://drive.google.com/u/0/uc?id=1HQpHOxkLwKHbGk2CByWs0iaECYqBrAnl&export=download" rel="noreferrer" target="_blank">
           <button className="btn-style">Download CV</button> 
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
