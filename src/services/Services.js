import {Col, Container, Row} from "react-bootstrap";
import mobIcon from "../assets/services/Mobile apps  development.png";
import webIcon from "../assets/services/Website development.png";
import aiIcon from "../assets/services/AI & cloud services  management.png";
import secIcon from "../assets/services/Security of IT.png";
import bgImage from "../assets/services/bg vector (1).png"
import "./Services.css"

export const Services = () => {
    return (
        <Container className="content-container" fluid={true} >
            <Container fluid={true} >
                <div className="content-title ">
                    <span className="white-title">OUR <span className="light-blue-text">SPECIALITIES</span></span>
                </div>
            </Container>
            <div className="content-parent">
                <div className="content-bg d-none d-sm-block">
                    <img src={bgImage} className="img-fluid w-100 content-bg-image" alt={""}/>
                </div>
                <Container fluid={true} className="content-icons d-flex justify-content-center  h-75">
                    <Row className="justify-content-md-center col-10 h-100">
                        <Col className="col-lg-3">
                            <img src={mobIcon}  className="h-75" alt={""}/>
                        </Col>
                        <Col className="mt-xl-3 col-lg-3">
                            <img src={webIcon} className="h-75 mt-3" alt={""}/>
                        </Col>
                        <Col className="mt-xl-5 col-lg-3" >
                            <img src={secIcon} className="h-75 mt-4" alt={""}/>
                        </Col>
                        <Col className="mt-xl-5 col-lg-2">
                            <img src={aiIcon} className="h-75 mt-5" alt={""}/>
                        </Col>
                    </Row>
                </Container>

            </div>

        </Container>
    )
}
