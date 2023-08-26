import React, { useEffect, useState } from 'react'
import './Card.scss';
import ViewReminder from '../Modal/ViewReminder';
import { deleteReminder } from '../../services/http-service';

export default function Card({ reminder }) {
    const [color, setColor] = useState("#ddd");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!reminder.completed) {
            setColor('#' + Math.floor(Math.random() * 16777215).toString(16) + '73');
        }
    }, [reminder.completed]);

    const toggleModal = () => {
        setIsOpen(isOpen => !isOpen);
    }

    const handleDelete = async (id) => {
        const response = await deleteReminder('/',id);
        alert("Deleted Successfully!!!");
        window.location.reload(false);

    }

    const renderViewReminder = () => {
        return <ViewReminder toggleModal={toggleModal} remainder={reminder} />;
    }

    return (
        <>
            < div style={{ backgroundColor: color }} className='card' data-name={reminder.name} >
                <span style={{ float: 'right' }} onClick={()=>{handleDelete(reminder._id)}} className="material-icons">delete</span>
                <h4 onClick={toggleModal} >{reminder.title}</h4>
                <hr />
                <h5>createdDate : {new Date(reminder.createdDate).toLocaleString()}</h5>
                <hr />
                <p>{reminder.description}</p>
            </div >
            {isOpen ? renderViewReminder() : null}
        </>
    )
}
