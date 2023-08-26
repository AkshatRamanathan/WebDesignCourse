const baseURI = 'http://localhost:3001/reminder';

export const get = async (uri, query) => {
    const params = new URLSearchParams(query);
    const response = await fetch(baseURI + uri + params, {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    })
    const data = await response.json();
    return data;
}

export const getById = async (uri, id) => {
    const response = await fetch(baseURI + uri + id, {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    })
    const data = await response.json();
    return data;
}

export const deleteReminder = async (uri, id) => {
    const response = await fetch(baseURI + uri + id, {
        method: 'DELETE',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'

        }
    })
    const data = await response.json();
    return data;
}

export const post = async (uri, requestBody) => {
    const response = await fetch(baseURI + uri, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    const data = await response.json();
    return data;
}

export const put = async (uri, id, requestBody) => {
    const response = await fetch(baseURI + uri + id, {
        method: 'PUT',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    const data = await response.json();
    return data;
}
