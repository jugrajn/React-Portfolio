import React, { useState } from 'react';
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image  from 'react-bootstrap/Image';
import ('../Resume.css');



function Tech() {
    // Add initial states for icons
    const [isShown, setIsShown] = useState(false)
    const [showText, setShowText] = useState('')

    // Function to change text based on which icon user hovers
    const hoverHandler = (e) => {
        setIsShown(true)
        setShowText(e.target.dataset.desc)
    } 
    

    return (
        <Container style={{ height: '90vh', marginBottom:'10em' }}>
            <br></br>
            <Row fluid>
                <Col fluid>
                    <h2 style={{textAlign:'center', fontWeight:'bold'}}>Technologies Used</h2>
                    <br></br>
                    <Row>
                        <Col><img className='tech-icons' data-desc='HTML' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='HTML-icon' src="https://img.icons8.com/color/96/000000/html-5--v1.png"/></Col>
                        <Col><img className='tech-icons' data-desc='CSS' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='CSS-icon' src="https://img.icons8.com/color/96/000000/css3.png"/></Col>
                        <Col><img className='tech-icons' data-desc='JAVASCRIPT' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='JAVASCRIPT-icon' src="https://img.icons8.com/color/96/000000/javascript--v1.png"/></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col><img className='tech-icons' data-desc='BOOTSTRAP' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='BOOTSTRAP-icon' src="https://img.icons8.com/color/96/000000/bootstrap.png"/></Col>
                        <Col><img className='tech-icons' data-desc='NODE' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='NODE-icon' src="https://img.icons8.com/color/96/000000/nodejs.png"/></Col>
                        <Col><img className='tech-icons' data-desc='JQUERY' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='JQUERY-icon' src='https://cdn.iconscout.com/icon/free/png-512/jquery-10-1175155.png' height='96px' width='96px'/></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col><img className='tech-icons' data-desc='EXPRESS' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='EXPRESSJS-icon' src="/expressjs.jpg" height='96px' width='96px'/></Col>
                        <Col><img className='tech-icons' data-desc='MYSQL' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='MYSQL-icon' src="https://img.icons8.com/fluent/96/000000/mysql-logo.png"/></Col>
                        <Col><img className='tech-icons' data-desc='MONGODB' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='MONGODB-icon' src="https://img.icons8.com/color/96/000000/mongodb.png"/></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col><img className='tech-icons' data-desc='SEQUELIZE' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='SEQUELIZE-icon' src="/sequelize-icon.png" height='96px' width='96px'/></Col>
                        <Col><img className='tech-icons' data-desc='REACT' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='REACT-icon' src="https://img.icons8.com/color/96/000000/react-native.png"/></Col>
                        <Col><img className='tech-icons' data-desc='GIT' onMouseEnter={(e) => {hoverHandler(e)}} onMouseLeave={() => setIsShown(false)} alt='GIT-icon' src="https://img.icons8.com/color/96/000000/git.png"/></Col>
                    </Row>
                </Col>
                <Col fluid style={{marginLeft:'5em'}}>
                    <h2 style={{textAlign:'center', fontWeight:'bold'}}>Resume</h2>
                    <a href='https://drive.google.com/drive/folders/1b9vqqrxsqFpSjmN6oIh4OGuV-ElwSoik?usp=sharing'><Image src='/resume.PNG' thumbnail></Image></a>
                    <br></br>
                </Col>
            </Row>
            <br></br>
            {isShown && (
                        <p style={{textAlign:'center', fontSize:'5em', fontWeight:'bolder', color:'teal'}}>{showText}</p>
                    )}
        </Container>
    );
}

export default Tech;