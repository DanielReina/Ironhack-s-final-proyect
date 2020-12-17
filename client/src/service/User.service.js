import axios from 'axios'

class UserService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            // baseURL: 'http://localhost:5000/api/users',
            withCredentials: true
        })
    }

    getUsers = () => this.apiHandler.get('/')
    getOneUser = userId => this.apiHandler.get(`/getOneUser/${userId}`)

}

export default UserService