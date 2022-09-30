import axios from 'axios'

const ACADEMY_BASE_API_URL = "http://localhost:8080"

class Auth{

    loginUser(user){
        return axios.post(ACADEMY_BASE_API_URL + '/user/login', user);
    }

    loginAdmin(admin){
        return axios.post(ACADEMY_BASE_API_URL + '/admin/login', admin);
    }

    createAdmin(payload){
        return axios.post(ACADEMY_BASE_API_URL + '/admin/signup', payload);
    }

    createUser(payload){
        return axios.post(ACADEMY_BASE_API_URL + '/user/signup', payload);
    }

}

export default new Auth();