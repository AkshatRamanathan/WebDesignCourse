"use client";
import { useEffect, useState } from 'react';
import Search from './../components/search/search'
import CourseCard from './../components/course-card/course-card';

import './page.scss'
import { serachCourses } from '../services/course-service';
import Course from '@/models/course';

// const getCourseCard = async (courses: Course[]) => {

//   // const  = await serachCourses()
//   const cards = 
//   return (cards)
// }

export default function Home() {

  const [courses, setCourses] = useState<Course[]>([]);

  const cards = courses.map(course => (<CourseCard key={course.name} course={course}></CourseCard>));

  const searchHandler = (query: string | null) =>{
    serachCourses().then((items: Course[]) => setCourses((s) => [...items]))
  }
  useEffect(() =>{
    searchHandler(null)
  }, [])

  return (
    <div>
      <Search searchHandler={searchHandler}></Search>
      <section className='card-container'>
        {cards}
      </section>
    </div>
  )
}
