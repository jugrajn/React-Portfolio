import React from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { GrInstagram, GrTwitter } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import ('../Footer.css');

function Footer() {
    return (
        <Container style={{paddingBlock:'4vh', marginTop:'3vh'}}>
            <Row>
                <Col className='d-flex justify-content-center' sm={3}><a className='footer-icons' href='https://github.com/jugrajn'><SiGithub size='3em' /></a></Col>
                <Col className='d-flex justify-content-center' sm={3}><a className='footer-icons' href='https://ca.linkedin.com/in/jugraj-nijjar-06b46979'><FaLinkedin size='3em' /></a></Col>
                <Col className='d-flex justify-content-center' sm={3}><a className='footer-icons' href='https://twitter.com/_jugular'><GrTwitter size='3em' /></a></Col>
                <Col className='d-flex justify-content-center' sm={3}><a className='footer-icons' href='https://www.instagram.com/jugrajn/?hl=en'><GrInstagram size='3em' /></a></Col>
            </Row>
        </Container>
    )
}

export default Footer;