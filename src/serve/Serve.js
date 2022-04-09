import { Col, Container, Row } from "react-bootstrap"
import "./Serve.css";
import leftimg from "../assets/serve/bg.png";
import rightimg from "../assets/serve/bgr.png";
import middleimg from "../assets/serve/bgm.png";
import btnimg from "../assets/serve/btn.png";
import linkimg from "../assets/serve/link.png";
import hoverimg from "../assets/serve/hover.png";

export const Serve = () => {
    return (
        <Container fluid={true} className="serve-container" >
            <Container fluid={true} className="d-flex justify-content-center vstack gap-5">
                <Container>
                    <div className="content-title">
                        <span className="white-title">industries <span className="light-blue-text">we serve</span></span><br/>
                        <span className="white-context">Consectetur adipisicing elt, sed do eiusmod tempor incididucnt ut labore et dolore magna aliqua.</span>
                    </div>
                </Container>
            </Container>
            <div className="serve-back-img">
                <div className="col-lg-4 col-md-10 col-sm-10 col-xs-10" ><img src={leftimg} className="serve-img" /></div>
                <div className="col-lg-4 col-md-10 col-sm-10 col-xs-10 middle">
                    <img src={middleimg} className="serve-img" />
                    <div className="serve-text">
                        <span className="serve-title">corporate</span><br/>
                        <span className="serve-context">Use this section to describe your company and the services you offer. You could share your company’s story and details about why you are in business. The goal is to create a connection with the visitor and give them confidence to work with you.</span><br/>
                        <br/><br/>
                        <img src={ btnimg } />
                    </div>
                </div>
                <div className="col-lg-4 col-md-10 col-sm-10 col-xs-10"><img src={rightimg} className="serve-img" /></div>
            </div>
            <div className="content">
                <div className="content-title">
                    <span className="white-title">ou<span className="light-blue-text">r partners</span></span><br/>
                    <span className="white-context">Consectetur adipisicing elt, sed do eiusmod tempor incididucnt ut labore et dolore magna aliqua.</span>
                </div>
                <div className="link">
                    <img src={ linkimg } />
                    <img src={ hoverimg } className="link-hover"/>
                </div>
                <br></br><br></br>
            </div>
        </Container>
    )
}