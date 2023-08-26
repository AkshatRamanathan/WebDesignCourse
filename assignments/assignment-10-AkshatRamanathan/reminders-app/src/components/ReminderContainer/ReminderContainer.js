import { get } from '../../services/http-service';
import Card from '../Card/Card';
import './ReminderContainer.scss';
import { useEffect, useState } from 'react';

export default function ReminderContainer() {
    const [remindersList, setRemindersList] = useState([]);

    useEffect(() => {
        fetchReminders();
    }, [])

    async function fetchReminders() {
        const reminders = await get('/');
        setRemindersList(reminders);
    }

    return (
        <div className='flex-container'>
            {remindersList.map((item) => (
                <Card key={item._id} reminder={item} />
            ))
            }
        </div>
    );
}
