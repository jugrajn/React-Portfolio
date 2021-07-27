import React from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Image  from 'react-bootstrap/Image';

function Projects() {
    return (
        <Container style={{ height: '85vh' }}>
            <h1 style={{textAlign:'center'}}>Projects</h1>
            
            <Row className='py-4'>

                <Col className='mx-2'>
                    <a href='https://github.com/AnaMolly/Simmer_Cookbook'><b><p style={{textAlign:'center'}}>Simmer</p></b></a>
                    <a href='https://simmer-cookbook.herokuapp.com/'><Image src='/simmer.PNG' thumbnail></Image></a>
                </Col>
                <Col className='mx-2'>
                    <a href='https://github.com/andresaponte22/film-dimension'><b><p style={{textAlign:'center'}}>Film Dimension</p></b></a>
                    <a href='https://andresaponte22.github.io/film-dimension/'><Image src='/filmDimension.gif' thumbnail></Image></a>
                </Col>
                <Col className='mx-2'>
                    <a href='https://github.com/jugrajn/weather_dashboard'><b><p style={{textAlign:'center'}}>Weather Dashboard</p></b></a>
                    <a href='https://jugrajn.github.io/weather_dashboard/'><Image src='/weatherDashboard.png' thumbnail></Image></a>
                </Col>
            </Row>
            <br></br>
            <br></br>
            <Row className='py-2'>
                <Col className='mx-2'>
                    <a href='https://github.com/jugrajn/fitness-tracker'><b><p style={{textAlign:'center'}}>Fitness Tracker</p></b></a>
                    <a href='https://piscine-vin-51733.herokuapp.com/?id=60efae2d255e380015cef64c'><Image src='/dashboard.png' thumbnail></Image></a>
                </Col>
                <Col className='mx-2'>
                    <a href='https://github.com/jugrajn/tech-blog'><b><p style={{textAlign:'center'}}>Tech Blog</p></b></a>
                    <a href='https://shielded-taiga-95417.herokuapp.com/'><Image src='/homeScreen.png' thumbnail></Image></a>
                </Col>
                <Col className='mx-2'>
                    <a href='https://github.com/jugrajn/dayPlanner'><b><p style={{textAlign:'center'}}>Day Planner</p></b></a>
                    <a href='https://jugrajn.github.io/dayPlanner/'><Image src='/dayPlanner.png' thumbnail></Image></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;