import { response } from 'express';
import * as reminderService from './../services/reminder-service.js';
import { setResponse, setErrorResponse } from './response-handler.js'

export const index = async (request, response) => {
    try {
        const params = { ...request.query };
        const reminder = await reminderService.search(params);
        setResponse(reminder, response)
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const range = async (request, response) => {
    try {
        const { createdDateFrom, createdDateTo } = request.query;
        const reminder = await reminderService.range(createdDateFrom, createdDateTo);
        setResponse(reminder, response)
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const filter = async (request, response) => {
    try {
        const text = request.params.text;
        const reminder = await reminderService.filter(text);
        setResponse(reminder, response)
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const post = async (request, response) => {
    try {
        const newReminder = request.body;
        const reminder = await reminderService.save(newReminder);
        setResponse(reminder, response);

    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const getById = async (request, response) => {
    try {
        const id = request.params.id;
        const reminder = await reminderService.getById(id);
        setResponse(reminder, response);

    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const put = async (request, response) => {
    try {
        const id = request.params.id;
        const updateReminder = request.body;
        const reminder = await reminderService.update(id, updateReminder);
        setResponse(reminder, response);
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}
export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const reminder = await reminderService.remove(id);
        setResponse({}, response);
    } catch (err) {
        setErrorResponse(500, err, response);
    }
}