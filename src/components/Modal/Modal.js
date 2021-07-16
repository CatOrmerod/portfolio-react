import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, List, ListInlineItem } from 'reactstrap';
import './modal.css';

const ModalExample = ({ isOpen, onClose, selectedProject }) => {
    console.log(selectedProject);
    const {
        projectTitle,
        projectTools,
        projectURL,
        projectRepo,
        projectRole,
        projectDescription,
        projectScreenshot
    } = selectedProject;

    return (
        <Modal isOpen={isOpen} toggle={onClose}>
            <ModalHeader toggle={onClose}>{projectTitle}</ModalHeader>
            <ModalBody>
            <img src={projectScreenshot} alt="" style={{ width:'90%', maxWidth:'300px'}} />
                <List type="inline">
                    <ListInlineItem>Description: {projectDescription}</ListInlineItem>
                    <ListInlineItem>Tools: {projectTools}</ListInlineItem>
                    <ListInlineItem>Role: {projectRole}</ListInlineItem>
                </List>
            </ModalBody>
            <ModalFooter>
                <Button href={projectRepo} onClick={projectRepo} target="_blank">Github</Button>
                <Button href={projectURL} onClick={projectURL} target="_blank">Deployed</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalExample;