import { Container } from "react-bootstrap"
import "./Footer.css"
import bacimg from '../assets/footer/bg.png';
import logoimg from '../assets/footer/logo.png';
import linkimg from '../assets/footer/social media.png';

export const Footer = () => {
    return (
        <Container fluid={true} className="footer-container">
            <img src={bacimg} className="footer-bac" /> 
            <div className="footer-box">
                <img src={ logoimg } /><br/><br/>
                <img src={ linkimg } className="link-img"/><br/><br/><br/><br/><br/><br/>
                <span className="footer-text">© 2022 HitechWiser. All Rights Reserved. | Cookie & Privacy Policy</span>
            </div>
        </Container>
    )
}