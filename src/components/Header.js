import React from 'react';
import Jumbotron  from 'react-bootstrap/Jumbotron';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function HeroJumbo() {
    return (
        <Jumbotron style={{ height: '85vh' }}>
            <Container>
                <Row className='py-5'>
                    <Col>
                        <p style={{ fontSize: '7em', fontWeight: 'bolder'}}><b>Being <span style={{fontStyle: 'italic', color: 'teal'}}>Pragmatic</span></b></p>
                        <br></br>
                        <h3>Designing projects that are practical, elegant, and easy to use.</h3>
                        <p>Born and raised in Vancouver, British Columbia. Currently living in Toronto. Ontario. Honing my skills in HTML and CSS. I thouroughly enjoy using these programming languages to design and make unique web applications and with my motto having the glass half full im always learning. I will be adding javascript to my repertoire to add some sophistication to my applications.</p>
                    </Col>
                    <Col>
                        <Image src="/avatar.PNG" fluid />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default HeroJumbo;