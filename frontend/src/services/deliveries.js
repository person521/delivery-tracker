import axios from 'axios'
const baseUrl = '/api/deliveries'
const mapsUrl = '/api/predictions'
const key = 'AIzaSyDwdKdt1Sn0CmERazHNs1Mn8wwG9pqOVCI'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const autocomplete = (parametersObject) => {
    const request = axios.get(mapsUrl, {
        params: {
            address: parametersObject.address,
            sessiontoken: parametersObject.sessiontoken
        }
    })
    return request.then(response => response.data)
}

export default {getAll, create, update, remove, autocomplete}