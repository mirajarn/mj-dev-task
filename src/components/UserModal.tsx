import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { User } from '../interfaces/User';
import Heading from './Heading';
import { LABELS } from '../variables/variables';

interface UserModalProps {
    show: boolean;
    onClose: () => void;
    user: User | null;
}

const UserModal: React.FC<UserModalProps> = ({ show, onClose, user }) => {
    if (!user) return null;

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header>
                <Modal.Title><Heading title={LABELS.USER_INFORMATION} /></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p className='none-margin'>Address:</p>
                    <ul className="modal-list">
                    <li>Street: {user.address.street}</li>
                    <li>Suite: {user.address.suite}</li>
                    <li>City: {user.address.city}</li>
                    <li>Zipcode: {user.address.zipcode}</li>
                    <li>Geo: Lat {user.address.geo.lat}, Lng {user.address.geo.lng}</li>
                    </ul>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p className='none-margin'>Company:</p>
                    <ul className="modal-list">
                    <li>Name: {user.company.name}</li>
                    <li>Catch phrase: {user.company.catchPhrase}</li>
                    <li>BS: {user.company.bs}</li>
                    </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserModal;
