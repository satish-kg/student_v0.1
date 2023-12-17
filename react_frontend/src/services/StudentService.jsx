import axios from 'axios';

const STUDENT_BASE_URL = "http://localhost:8989/api/v1/student/getAll";

class StudentService {
    getStudents() {
        return axios.get(STUDENT_BASE_URL);
    }
}

export default new StudentService();