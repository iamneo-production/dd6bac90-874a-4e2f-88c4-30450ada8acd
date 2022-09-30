import axios from 'axios'

const ACADEMY_BASE_API_URL = "http://localhost:8080"

class AcademyService{

    getAcademies(){
        return axios.get(ACADEMY_BASE_API_URL + '/admin/viewInstitute');
    }

    getAcademy(id){
        return axios.get(ACADEMY_BASE_API_URL + `/admin/viewInstitute/${id}`)
    }

    addAcademy(academyPayload){
        return axios.post(ACADEMY_BASE_API_URL + '/admin/addInstitute', academyPayload);
    }

    deleteAcademy(academyId){
        return axios.delete(ACADEMY_BASE_API_URL + `/admin/deleteInstitute/${academyId}`);
    }

    updateAcademy(academyId, payload){
        return axios.put(ACADEMY_BASE_API_URL + `/admin/editInstitute/${academyId}`, payload )
    }



}

export default new AcademyService();