import {Container} from "react-bootstrap";
import "./Intro.css";
import backGround from "../assets/intro/bg-img.png";
import Logo from "../assets/intro/logo_1.png";
import button from "../assets/intro/btn.png"


export const Intro = () => {
    return (
        <Container fluid={true} className="container-intro ">
            <div className="background-image">
                <img className="img-fluid w-100" src={backGround} alt={""}/>
                <div className="logo-image">
                    <img className="img-fluid logo" src={Logo} alt={""}/>
                </div>
                    <span className="container-text-first ">
                                WE BRING TECHNOLOGY
                            </span>

                    <span className="container-text-second">
                            TO YOUR
                            </span>

                    <span className="container-text-third ">
                            FINGERTIPS
                            </span>
                <div className="btn-image">
                    <img className="img-fluid logo" src={button} alt={""}/>
                </div>
            </div>
        </Container>
    )
}
