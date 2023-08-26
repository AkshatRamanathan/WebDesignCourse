// Contains all the controllers for various responses

const setResponse = (obj, response) => {
    
    // When the call is successful we return a 200 status along with the object
    response.status(200);
    response.json(obj);
}

const setError = (httpstatus, err, response) => {

    response.status(httpstatus);
    response.json(err)
}

export {
    setError,
    setResponse
}