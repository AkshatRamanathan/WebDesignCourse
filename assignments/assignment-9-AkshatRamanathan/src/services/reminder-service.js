import Reminder from './../models/reminder.js'

export const search = async (params) => {
    const reminders = Reminder.find(params).exec();
    return reminders;
}
export const range = async (createdDateFrom, createdDateTo) => {
    const reminders = Reminder.find({
        $and: [
            { createdDate: { $gte: new Date(createdDateFrom) } },
            { createdDate: { $lte: new Date(createdDateTo) } }
        ]
    }).exec();
    return reminders;
}
export const filter = async (text) => {
    var newText = new RegExp(`.*${text}.*`);
    const reminders = Reminder.find({
        $or: [
            { title: { $regex: newText, $options: "i" } },
            { description: { $regex: newText, $options: "i" } },
        ]
    }).exec();
    return reminders;
}
export const save = async (newReminder) => {
    const reminder = new Reminder(newReminder);
    return reminder.save();
}

export const getById = async (id) => {
    const reminder = Reminder
        .findById(id)
        .exec();
    return reminder;
}

export const update = async (id, updateReminder) => {
    const reminder = Reminder
        .findByIdAndUpdate(id, updateReminder)
        .exec();
    return reminder;
}

export const remove = async (id) => {

    const reminder = Reminder
        .findByIdAndDelete(id)
        .exec();
    return reminder;
}