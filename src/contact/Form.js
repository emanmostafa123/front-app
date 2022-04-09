import { Col, Container, Form as Forms, Row } from 'react-bootstrap'
import './Form.css'
import backing from '../assets/contact/bg.png';
import btning from '../assets/contact/btn.png';

export const Form = () => {
    return (
        <Container fluid={true} className="contact-container">
            <img src={backing} />
            <div className='contact'>
                <div className='contact-title'>
                    <span className='contact-subtitle'>Solve your biggest AI problems with us</span><br/>
                    <span className='contact-text'>through<br/>inovations</span>
                </div>
                <div className='form-box'>
                    <Forms >
                        <div className='contact-row'>
                            <div className='yield'>
                                <Forms.Control type="text" className="contact-yield" placeholder='First name'/>
                            </div>
                            <div className='yield'>
                                <Forms.Control type="text" className='contact-yield' placeholder='Last name'/>
                            </div>
                        </div>
                        <div className='contact-row'>
                            <div className='yield'>
                                <Forms.Control type="text" className='contact-yield' placeholder='Email Address'/>
                            </div>
                            <div className='yield'>
                                <Forms.Control type="text" className='contact-yield' placeholder='Subject'/>
                            </div>
                        </div>
                        <div className='contact-area'>
                            <div className='yield-area'>
                                <Forms.Control as="textarea" className='contact-yield-area' rows="6" placeholder='Write your message'/>
                            </div>
                        </div>
                        <div className='contact-button'>
                            <img className='contact-submit' src={ btning } />
                        </div>
                    </Forms>
                </div>
            </div>
        </Container>
    )
}