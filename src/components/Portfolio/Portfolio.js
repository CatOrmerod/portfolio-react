import React, { useState } from 'react';
import { motion } from 'framer-motion'
import Modal from '../Modal/Modal.js';
import { Card, Button, CardTitle, CardText, CardFooter, CardBody, CardImg, Row, Col, Container, Jumbotron } from 'reactstrap';
import './portfolio.css';
import { projects } from '../../lib/projects.js'

const Portfolio = (props) => {
    const [selectedProject, setSelectedProject] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = project => {
        setSelectedProject(project);
        setIsModalOpen(!isModalOpen);
    };
    return (
        <Container>
            <Modal selectedProject={selectedProject} onClose={toggleModal} isOpen={isModalOpen}/>
            <Jumbotron className="text-center">
            <h3>My Projects</h3>
            <p className="lead">Check out my work below</p>
            </Jumbotron>
            <Row xs="1" sm="2" md="4" lg="6">
                {projects.map(project => (
                    <Col>
                        <Card className='h-100'>
                            <CardImg top width="90%" src={project.projectPic} alt="" className='img' style={{ width:'90%', maxWidth:'250px', textAlign: 'center'}}/>
                            <CardBody>
                                <CardTitle tag="h6">{project.projectTitle}</CardTitle>
                                <CardText className="text-muted">{project.projectRole}</CardText>
                            </CardBody>
                            <CardFooter>
                                <Button
                                    key={project.id}
                                    onClick={() => toggleModal(project)}
                                >See More</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Portfolio;