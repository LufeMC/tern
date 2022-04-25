import axios from 'axios'

const headers = {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
}

const register = (body, callback) => {
    body = JSON.stringify(body)
    axios.post('http://localhost:3000/users/register', body, {
        headers
    })
    .then((res) => callback(res.data))
    .catch(err => console.log(err))
}

const login = (body, callback) => {
    body = JSON.stringify(body)
    axios.post('http://localhost:3000/users/login', body, {
        headers
    })
    .then((res) => callback(res.data))
    .catch(err => console.log(err))
}

const auth = {
    register,
    login
}

export default auth