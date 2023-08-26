import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const CourseSchema = new mongoose.Schema({
    _id: ObjectId,
    name: {
        type: String,
        required: true
    },
    instructor: String,
    location: {
        building: String,
        room: String
    },
    schedule: {
        day: String,
        startTime: Date,
        endTime: Date
    }

});
const Course = mongoose.model('Course', CourseSchema);
export default Course;