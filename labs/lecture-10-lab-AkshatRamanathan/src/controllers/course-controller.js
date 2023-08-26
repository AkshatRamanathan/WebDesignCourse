import { response } from 'express';
import * as courseService from './../services/course-service.js'
import { setResponse, setErrorResponse } from './response-handler.js'

export const index = async (request, response) => {
    try {
        const params = { ...request.query };
        const courses = await courseService.search(params);
        setResponse(courses, response)
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const post = async (request, response) => {
    try {
        const newCourse = request.body;
        const course = await courseService.save(newCourse);
        setResponse(course, response);
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const getById = async (request, response) => {
    try {
        const id = request.params.id;
        const course = await courseService.getById(id);
        setResponse(course, response);
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const put = async (request, response) => {
    try {
        const id = request.params.id;
        const updateCourse = request.body;
        const course = await courseService.update(id, updateCourse);
        setResponse(course, response);
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const course = await courseService.remove(id);
        setResponse({}, response);
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}