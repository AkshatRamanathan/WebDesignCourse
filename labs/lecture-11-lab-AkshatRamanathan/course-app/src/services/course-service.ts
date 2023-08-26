import { search } from "./rest-service";
import Course from '../models/course';

const courseUri = '/courses'
export const serachCourses = async () => {

    const courses = await search<Course>(courseUri, {});
    return courses;
}