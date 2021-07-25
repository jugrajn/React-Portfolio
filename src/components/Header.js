import React from 'react';
import Jumbotron  from 'react-bootstrap/Jumbotron';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function HeroJumbo() {
    return (
        <Jumbotron>
            <Container>
                <Row className='py-5'>
                    <Col>
                        <h1><b>Be Pragmatic</b></h1>
                        <h3>Designing projects that are practical, elegant, and easy to use.</h3>
                    </Col>
                    <Col>
                        <Image src="../public/memojiAvatar.png" fluid />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default HeroJumbo;