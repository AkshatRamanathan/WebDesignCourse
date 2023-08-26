import React, { useRef } from 'react';
import './Modal.scss';
import { post } from '../../services/http-service';

export default function NewForm({ isOpen, toggleModal }) {

    const form = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, description, createdDate } = form.current;
        const newReminder = {
            title: title.value,
            completed: false,
            description: description.value,
            createdDate: createdDate.value
        }
        const response = await post('/', newReminder);
        toggleModal();
        window.location.reload(false);

    }

    return (
        <>
            {
                (isOpen &&
                    <div id="modal" className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
                        <div className="modal-content">
                            <span className="close" onClick={toggleModal}>&times;</span>
                            <h3>ENTER NEW REMINDER INFORMATION</h3>
                            <hr />
                            <form ref={form} id="newReminderForm" onSubmit={handleSubmit}>
                                <label htmlFor="name">Enter Name:</label><br />
                                <input type="text" name="title" id="name" required /><br />
                                <br />
                                <label htmlFor="description">Enter Description:</label><br />
                                <textarea rows="10" cols="90" name="description" id="description" defaultValue={"Enter description here..."} required /><br />
                                <br />
                                <label htmlFor="createdDate">Enter New created Date-Time:</label><br />
                                <input type="datetime-local" name="createdDate" id="createdDate" required /><br />
                                <input type="submit" id="submit-btn" className="btn" value="Submit" />
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    );
}
