import React, { useState }  from 'react';
import Modal from '../Modal.js';
import { Card, Button, CardTitle, CardText, CardFooter, CardBody, CardImg, Row, Col } from 'reactstrap';
import { projects } from '../../lib/projects.js'

const Portfolio = (props) => {
    const [selectedProject, setSelectedProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = project => {
        setSelectedProject(project);
        setIsModalOpen(!isModalOpen);
    };
    return (
        <Row>
            {isModalOpen && <Modal selectedProject={selectedProject} onClose={toggleModal} />}
            <Col sm="6">
                {projects.map(project => (
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
                ))}
            </Col>
        </Row>
    );
};

export default Portfolio;