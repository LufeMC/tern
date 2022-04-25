import axios from 'axios'

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}

const save = (body, callback) => {
    body = JSON.stringify(body)
    axios.post('http://localhost:3000/itineraries/new-itinerary', body, {
        headers
    })
    .then((res) => callback(res.data))
    .catch(err => console.log(err))
}

const connect = (body, callback) => {
    body = JSON.stringify(body)
    axios.post('http://localhost:3000/itineraries/connect', body, {
        headers
    })
    .then((res) => callback(res.data))
    .catch(err => console.log(err))
}

const listAll = (id, callback) => {
    axios.get(`http://localhost:3000/itineraries/list-all/${id}`, {
        headers
    })
    .then((res) => callback(res.data))
    .catch(err => console.log(err))
}

const list = (id, callback) => {
    axios.get(`http://localhost:3000/itineraries/list/${id}`, {
        headers
    })
    .then((res) => callback(res.data))
    .catch(err => console.log(err))
}

const itinerariesService = {
    save,
    connect,
    listAll,
    list
}

export default itinerariesService