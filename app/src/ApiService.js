import axios from 'axios';

const ITEMS_API_REST_URL = "http://localhost:8080/items";

class APIService {
    
    getItems(){
        return axios.get(ITEMS_API_REST_URL);
    }

}

export default new APIService();
