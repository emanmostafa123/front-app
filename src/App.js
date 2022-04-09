import './App.css';
import {Header} from "./nav-bar/Header";
import {Container} from "react-bootstrap";
import {Intro} from "./intro/Intro";
import {Services} from "./services/Services";
import {VideoContent} from "./video-content/VideoContent";
import { AboutUs } from './aboutUs/AboutUs';
import { Serve } from './serve/Serve';
import { Form } from './contact/Form';
import { Footer } from './footer/Footer';
 
function App() {
  return (
    <Container fluid={true} className="App" >
            <Header/>
            <Intro/>
            <Services/>
            <VideoContent/>
            <AboutUs />
            <Serve />
            <Form />
            <Footer />
    </Container>
  );
}

export default App;
