
      import './App.css';
      import 'bootstrap/dist/css/bootstrap.min.css';
      import Fade from "react-reveal/Fade";
      import { Parallax } from "react-parallax";
      import Container from "react-bootstrap/Container";
      import Mynevbar from '../src/Components/Navbar/Mynevbar';
      import MyCarasol from '../src/Components/Carasol/MyCarasol';
      import MyMassage from '../src/Components/Tital-Massage/MyMassage';
      import About from '../src/Components/About/About';

      function App() {
        return (
         <div  >
        <Mynevbar />
        <MyCarasol/>
        <MyMassage />
        
          <div>
          <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./Components/Asst/img/parallax/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
      <Container  className="container-box rounded"> 
      <Fade duration={500}>
      <About /> 
      </Fade>
      </Container> 

     </Parallax>
       </div>
      
     
    </div>
  );
};

      export default App;
