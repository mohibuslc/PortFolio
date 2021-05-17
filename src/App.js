
      import './App.css';
      import 'bootstrap/dist/css/bootstrap.min.css';
      import Fade from "react-reveal/Fade";
      import { Parallax } from "react-parallax";
      import Container from "react-bootstrap/Container";
      import Mynevbar from '../src/Components/Navbar/Mynevbar';
      import Hero from "../src/Components/Hero/Hero.js";
      import {  Route, Switch } from 'react-router-dom';
     

           
     
      import About from '../src/Components/About/About';
      import Skills from "../src/Components/Skills/Skills.js";
     

      function App() {   //  Need to = install Parallax  / install reveal ;
        
        return (
       
         <div  >
           <switch>
             
           </switch>
        <Mynevbar />
        <Hero />
       
       
        
        
          <div> 
          <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./Components/assets/img/parallax/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
      <Container  className="container-box rounded"> 
      <Fade duration={500}>
      <About /> 
      </Fade>
      </Container> 

     </Parallax>
      
         
          <Skills />
      
      </div>
     
    </div>
     
     
  );
};

      export default App;
