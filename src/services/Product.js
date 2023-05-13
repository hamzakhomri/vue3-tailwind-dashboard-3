import axios from'axios'
const PRODUCT_API_BASE_URL='http:://localholst:8080/product'
class EmployeeService{
    getEmployess(){
        return axios.get(PRODUCT_API_BASE_URL);
    }
}

export default new EmployeeService()