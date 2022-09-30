import axios from 'axios'

const ACADEMY_BASE_API_URL = "http://localhost:8080"

class CourseService{

    getCourses(){
        return axios.get(ACADEMY_BASE_API_URL + '/admin/viewCourse');
    }

    addCourse(coursePayload){
        return axios.post(ACADEMY_BASE_API_URL + '/admin/addCourse', coursePayload);
    }

    deleteCourse(courseId){
        return axios.delete(ACADEMY_BASE_API_URL + `/admin/deleteCourse/${courseId}`);
    }

    updateCourse(courseId){
        return axios.put(ACADEMY_BASE_API_URL + `/admin/editCourse/${courseId}`)
    }

}

export default new CourseService();