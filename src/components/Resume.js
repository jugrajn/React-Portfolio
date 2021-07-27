import React, { useState } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Tech() {

    const [isShown, setIsShown] = useState(false)
    const [showText, setShowText] = useState('')

    const hoverHandler = (e) => {
        setIsShown(true)
        setShowText(e.target.dataset.desc)
    } 
    


    return (
        <Container style={{ height: '85vh' }}>
            <br></br>
            <Row>
                <Col>
                    <h2 style={{textAlign:'center'}}>Technologies Used</h2>
                    <br></br>
                    <Row>
                        <Col><img data-desc='HTML' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='HTML-icon' src="https://img.icons8.com/color/96/000000/html-5--v1.png"/></Col>
                        <Col><img data-desc='CSS' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='CSS-icon' src="https://img.icons8.com/color/96/000000/css3.png"/></Col>
                        <Col><img data-desc='JAVASCRIPT' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='JAVASCRIPT-icon' src="https://img.icons8.com/color/96/000000/javascript--v1.png"/></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col><img data-desc='BOOTSTRAP' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='BOOTSTRAP-icon' src="https://img.icons8.com/color/96/000000/bootstrap.png"/></Col>
                        <Col><img data-desc='NODE' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='NODE-icon' src="https://img.icons8.com/color/96/000000/nodejs.png"/></Col>
                        <Col><img data-desc='JQUERY' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='JQUERY-icon' src='https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png' height='96px' width='96px'/></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col><img data-desc='EXPRESS' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='EXPRESSJS-icon' src="/expressjs.jpg" height='96px' width='96px'/></Col>
                        <Col><img data-desc='MYSQL' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='MYSQL-icon' src="https://img.icons8.com/fluent/96/000000/mysql-logo.png"/></Col>
                        <Col><img data-desc='MONGODB' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='MONGODB-icon' src="https://img.icons8.com/color/96/000000/mongodb.png"/></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col><img data-desc='SEQUELIZE' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='SEQUELIZE-icon' src="/sequelize-icon.png" height='96px' width='96px'/></Col>
                        <Col><img data-desc='REACT' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='REACT-icon' src="https://img.icons8.com/color/96/000000/react-native.png"/></Col>
                        <Col><img data-desc='GIT' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='GIT-icon' src="https://img.icons8.com/color/96/000000/git.png"/></Col>
                    </Row>
                </Col>
                <Col>
                    <h2 style={{textAlign:'center'}}>Resume</h2>
                    <br></br>
                </Col>
            </Row>
            <br></br>
            {isShown && (
                        <p style={{textAlign:'center', fontSize:'5em', fontWeight:'bolder'}}>{showText}</p>
                    )}
        </Container>
    );
}

export default Tech;