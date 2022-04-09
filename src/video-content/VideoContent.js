import {Container} from "react-bootstrap";
import "./VideoContent.css"
import vidImage from "../assets/advertisement/Rectangle 6.png"
import play_btn from "../assets/advertisement/play_btn.png"

export const VideoContent = () => {
    return (
        <Container fluid={true}>
            <Container fluid={true} className="d-flex justify-content-center vstack gap-5">
                <Container>
                    <div className="content-title">
                        <span className="white-title">WE'RE THE <span className="light-blue-text">FUTURE</span></span><br/>
                        <span className="white-context">Consectur adipisicing eit, sed do eiusmod tempor incididucnt ut labore et dplore mogna aliqua.</span>
                    </div>
                </Container>
                <Container className="relative">
                    <div>
                        <img src={vidImage} className="img-fluid w-100" alt={""}/>
                    </div>
                    <div>
                        <img src={play_btn} className="img-play" />
                    </div>
                </Container>
            </Container>
        </Container>
    )
}
