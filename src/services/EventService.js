import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Tobylau0525/JSON-server',
    withCredentials: false,
    headers:{
        Accept: 'applicantion/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(){
        return apiClient.get('/events')
    }
}