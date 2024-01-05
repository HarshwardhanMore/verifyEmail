exports.buildResponce = (response, statusCode, responceData) =>{
    response.status(statusCode).json(responceData);
}