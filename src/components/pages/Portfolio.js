import React, { useState } from 'react';
import Modal from '../Modal.js';
import { Card, Button, CardTitle, CardText, CardFooter, CardBody, CardImg, Row, Col, Container } from 'reactstrap';
import { projects } from '../../lib/projects.js'

const Portfolio = (props) => {
    const [selectedProject, setSelectedProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = project => {
        setSelectedProject(project);
        setIsModalOpen(!isModalOpen);
    };
    return (
        <Container>
            {isModalOpen && <Modal selectedProject={selectedProject} onClose={toggleModal} />}
            <Row xs="1" sm="2" md="3">
                {projects.map(project => (
                    <Col>
                        <Card>
                            <CardImg top width="100%" src={project.projectPic} alt="" />
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