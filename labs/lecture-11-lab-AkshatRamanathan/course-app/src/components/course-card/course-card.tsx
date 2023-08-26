import Course from '../../models/course';

interface Props {
    course: Course
}
export default function CourseCard(props: Props) {

    const course = props.course;

    return (
        <div className='card'>
            <h3>{course.name}</h3>
            <p>
                <span>
                    Instructor: {course.instructor}
                </span>
                <span>
                    Venue: {course.location.building}
                </span>
            </p>
            <p>
                Time: {course.schedule.startTime} - {course.schedule.endTime}
            </p>
        </div>
    )
}