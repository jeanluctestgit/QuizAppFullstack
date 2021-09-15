import axios from 'axios';

const BASE_URL = "http://localhost:8741/api";

class QuestionsService {
   
    getQuestions()
    {
        return axios.get(BASE_URL + "/questions" , {
            headers: {
                'accept': 'application/json'
            }
        });
    }

    addQuestion(data)
    {
        return axios.post(BASE_URL + "/questions" , data )
    }
}

export default new QuestionsService();
