import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, List, ListInlineItem } from 'reactstrap';

const ModalExample = ({ isOpen, onClose, selectedProject }) => {
    const {
        projectTitle,
        projectTools,
        projectURL,
        projectRepo,
        projectRole,
        projectDescription
    } = selectedProject;

    return (
        <Modal isOpen={isOpen} toggle={onClose}>
            <ModalHeader toggle={onClose}>{projectTitle}</ModalHeader>
            <ModalBody>
                <List type="inline">
                    <ListInlineItem>Description: {projectDescription}</ListInlineItem>
                    <ListInlineItem>Tools: {projectTools}</ListInlineItem>
                    <ListInlineItem>Role: {projectRole}</ListInlineItem>
                </List>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" href={projectRepo} onClick={projectRepo} target="_blank">Github</Button>
                <Button color="secondary" href={projectURL} onClick={projectURL} target="_blank">Deployed</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalExample;