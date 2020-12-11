import axios from 'axios'

class ProductService {

    constructor() {
        this.apiHandler = axios.create({
            // baseURL: process.env.REACT_APP_API_URL,
            baseURL: 'http://localhost:5000/api/products',
            withCredentials: true
        })
    }

    getProducts = () => this.apiHandler.get('/')
    getMyProducts =userId => this.apiHandler.get(`/productBySeller/${userId}`)   
    saveProduct = ProductsInfo => this.apiHandler.post(`/newProduct`, ProductsInfo)
    editProduct = (productId, productInfo) => this.apiHandler.put(`/editProduct/${productId}`, productInfo)
    deleteProduct = productId => this.apiHandler.delete(`/deleteProduct/${productId}`);
}

export default ProductService