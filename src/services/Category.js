import axios from'axios'
const CATEGORY_API_BASE_URL='http://localhost:8080/productcategory'

class CategoryService{
    getCategories(){
        console.log("Category.")
        return axios.get(CATEGORY_API_BASE_URL);
        
    }
}

export default new CategoryService()