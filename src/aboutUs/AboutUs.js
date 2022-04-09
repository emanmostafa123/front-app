import {Container, Row, Col} from "react-bootstrap";
import bgImage from "../assets/about/about.png"
import btnimg from "../assets/about/btn.png"
import "./AboutUs.css";

export const AboutUs = () => {
    return (
        <Container fluid={true} className="about-container" >
            <Row>
                <Col>
                    <div className="about-text">
                        <span className="white-title">about our<span className="light-blue-text"> company</span></span><br/><br/>
                        <span className="white-text">Use this section to describe your company and the services you<br/>offer. You could share your company’s story and details about<br/>why you are in business. The goal is to create a connection with<br/>the visitor and give them confidence to work with you.</span><br/><br/>
                        <span className="white-text">this is place holder text Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Fusce pellentesque, arcu eu euismod vulputate,<br/>libero turpis placerat dui, at tempus lacus turpis a lectus.</span>
                        <br/><br/><br/>
                        <img className="img-fluid logo" src={btnimg} alt={""}/>
                    </div>
                </Col>
                <Col>
                    <img src={ bgImage }  className="img-fluid w-100"/>
                </Col>
            </Row>
        </Container>
    )
}