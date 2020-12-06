import axios from 'axios'

class ProductService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/products'
        })
    }

    getProducts = () => this.apiHandler.get('/')
    saveProduct = ProductsInfo => this.apiHandler.post(`/newProduct/`, ProductsInfo)
}

export default ProductService