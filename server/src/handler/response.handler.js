const responseHandler = (res, statusCode, data) => res.status(statusCode).json(data)

const badRequest = (res, data) => responseHandler(res, 400, data)

const ok = (res, data) => responseHandler(res, 200, data)

const notFound = (res, data) => responseHandler(res, 400, data)

const unauthorize = (res, data) => responseHandler(res, 401, data)

const created = (res, data) => responseHandler(res, 201, data)

const error = (res, data) => responseHandler(res, 500, data)

module.exports = { badRequest, ok, notFound, unauthorize, created, error }
