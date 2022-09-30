import axios from 'axios'

const ACADEMY_BASE_API_URL = "http://localhost:8080"

class StudentService{

    getStudents(){
        return axios.get(ACADEMY_BASE_API_URL + '/admin/viewStudent');
    }

    addStudent(studentPayload){
        return axios.post(ACADEMY_BASE_API_URL + '/admin/addStudent', studentPayload);
    }

    deleteStudent(studentId){
        return axios.delete(ACADEMY_BASE_API_URL + `/admin/deleteStudent/${studentId}`);
    }

    updateStudent(studentId){
        return axios.put(ACADEMY_BASE_API_URL + `/admin/editStudent/${studentId}`)
    }

}

export default new StudentService();