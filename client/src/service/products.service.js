import axios from 'axios'

class productService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/products'
        })
    }

    getProducts = () => this.apiHandler.get('/')
}

export default productService