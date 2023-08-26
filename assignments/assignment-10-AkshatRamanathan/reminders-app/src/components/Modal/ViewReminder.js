import { useRef } from 'react';
import './Modal.scss';
import { put } from '../../services/http-service';

export default function ViewReminder({ toggleModal, remainder }) {
    const form = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, title, description, createdDate, completed } = form.current;
        const newReminder = {
            title: title.value,
            completed: completed.checked,
            description: description.value,
            createdDate: createdDate.value
        }
        const response = await put('/', id.value, newReminder);
        toggleModal();
        window.location.reload(false);

    }

    return (
        <>
            <div id="modal" className="modal" style={{ display: remainder ? 'block' : 'none' }}>
                <div className="modal-content">
                    <span className="close" onClick={toggleModal}>&times;</span>
                    <h3>VIEW REMAINDER</h3>
                    <hr />
                    <form ref={form} onSubmit={handleSubmit} id="viewReminderForm">
                        <label htmlFor="id">ID:</label><br />
                        <input type="text" name="id" id="id" defaultValue={remainder._id} disabled /><br />
                        <br />
                        <label htmlFor="title">Title:</label><br />
                        <input type="text" name="title" id="title" defaultValue={remainder.title} {...(remainder.completed && { disabled: true })} required /><br />
                        <br />
                        <label htmlFor="description">Description:</label><br />
                        <textarea rows="10" cols="90" name="description" id="description" {...(remainder.completed && { disabled: true })} required defaultValue={remainder.description} /><br />
                        <br />
                        <label htmlFor="createdDate">created Date:</label><br />
                        <input type="datetime-local" name="createdDate" id="createdDate" defaultValue={remainder.createdDate.slice(0, -1)} {...(remainder.completed && { disabled: true })} required /><br />
                        <br />
                        <label htmlFor="completed">Mark As Complete:</label><br />
                        <input type="checkbox" name="completed" id="completed" {...remainder.completed ? 'checked' : ''} {...(remainder.completed && { disabled: true })} /><br />
                        <input type="submit" id="submit-btn" className="btn" defaultValue="Update" {...(remainder.completed && { disabled: true })} />
                    </form>
                </div>
            </div>
        </>
    );
}
