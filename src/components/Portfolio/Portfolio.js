import React, { useState } from 'react';
import Modal from '../Modal/Modal.js';
import { Card, Button, CardTitle, CardText, CardFooter, CardBody, CardImg, Row, Col, Container } from 'reactstrap';
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
            <Row xs="1" sm="2" md="3">
                {projects.map(project => (
                    <Col>
                        <Card className='h-100'>
                            <CardImg top width="90%" src={project.projectPic} alt="" className='img' style={{ width:'90%', maxWidth:'300px', textAlign: 'center'}}/>
                            <CardBody>
                                <CardTitle tag="h5">{project.projectTitle}</CardTitle>
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