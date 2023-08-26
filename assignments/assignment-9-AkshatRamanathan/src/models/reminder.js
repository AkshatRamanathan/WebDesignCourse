import mongoose from "mongoose";
const ReminderSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        required: true
    },
},
    {
        versionKey: false,
        timestamps: {
            createdAt: 'createdDate',
            updatedAt: 'lastModifiedDate'
        }
    });
const Reminder = mongoose.model('Reminder', ReminderSchema);
export default Reminder;