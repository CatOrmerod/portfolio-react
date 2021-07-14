import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, List, ListInlineItem } from 'reactstrap';

const ModalExample = ({ selectedProject }) => {
    const {
        projectTitle,
        projectTools,
        projectURL,
        projectRepo,
        projectRole,
        projectDescription
    } = selectedProject;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}></Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{projectTitle}</ModalHeader>
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
        </div>
    );
}

export default ModalExample;