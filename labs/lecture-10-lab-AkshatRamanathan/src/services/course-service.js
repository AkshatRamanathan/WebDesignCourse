import Course from './../models/course.js'

export const search = async (params) => {
    const courses = Course.find(params).exec();
    return courses;
}
export const save = async (newCourse) => {
    const course = new Course(newCourse);
    return course.save();
}

export const getById = async (id) => {
    const course = Course
        .findById(id)
        .exec();
    return course;
}

export const update = async (id, updateCourse) => {
    const course = Course
        .findByIdAndUpdate(id, updateCourse)
        .exec();
    return course;
}

export const remove = async (id) => {

    const course = Course
        .findByIdAndDelete(id)
        .exec();
    return course;
}