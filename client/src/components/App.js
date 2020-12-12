import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Container, Row, Col, Navbar, FormControl,Form} from 'react-bootstrap'
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import logo from './layout/headerNavbar/logoHome.jpg'

import HeaderNavbar from './layout/headerNavbar/HeaderNavbar'
import Home from './pages/home/home'
import StartPage from './pages/startPage/StartPage'
import ProductForm from './pages/profile/productForm/ProductForm'
import Navigation from './layout/navigation/navigation'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import AuthServices from '../service/auth.service'
import ProductServices from '../service/products.service'
import Profile from './pages/profile/Profile'
import ProductsList from './pages/productsList/ProductsList'
import MyInfo from './pages/profile/myinfo/myInfo'
import EditProfile from './pages/profile/EditProfile'
import MyProducts from './pages/profile/myproducts/MyProducts'
import EditMyProduct from './pages/profile/myproducts/EditMyProduct'
import Directsale from './pages/directsale/DirectSale'
import Auctions from './pages/auctions/auctions'
import ProductDetails from './pages/productDetails/Productdetais.js'
import ProductCard from './pages/productsList/ProductCard'



class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined,
      productBackup:[],
      textBuscar:'',
      products: []
    }
    this.authServices = new AuthServices
    this.productServices = new ProductServices
}

componentDidMount = () =>{
  this.authServices
    .isLoggedIn()
    .then(response => this.setState({loggedInUser: response.data}))
    .catch(err => this.setState({loggedInUser: undefined}))

  this.productServices
    .getProducts()
    .then(response => this.setState({products: response.data,  productBackup: response.data}))
    .catch(err => this.setState({products: []})) 
} 

filter(e){    
  let text =e.target.value
  const data = this.state.productBackup
  const newData = data.filter(function(item){
      const itemDataTitle = item.title.toUpperCase()
      const itemDataDescp = item._id.toUpperCase()
      const campo = itemDataTitle+" "+itemDataDescp
      const textData = text.toUpperCase()
      return campo.indexOf(textData) > -1
  })
  this.setState({
      products: newData,
      textBuscar: text,
  })
}


setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El nuevo estado de App es:', this.state))

render() {
console.log('app consola',this.state.productBackup)
  return (
    <>
    <Navbar id='HNavbar' bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/" className="ml-auto"> <img alt="Logotipo" src={logo} width="30" height="30" className="d-inline-block align-top" style={{ width: '30px' }}/>Portada</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">      
          <Form inline>
          <FormControl type="text" value={this.state.text} placeholder="Buscar producto" className="ml-auto" onChange={(text) => this.filter(text)} />
          </Form>
      </Navbar.Collapse>
    </Navbar>
    <Container fluid>
      <Row>
        <Col xs={1}>
          <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />
        </Col>
        <Col  xs={11}>
          {this.state.textBuscar.length!=0 &&
            <Container>
              <h1>Listado de productos</h1>
              <Row>           
                  {this.state.products.map(elm => <ProductCard key={elm._id} {...elm}/>)}           
              </Row>
            </Container>}      
          <main> 
            <Switch>
              <Route path="/" exact render={() => <Home/>} />
              <Route path="/inicio"  render={() => <StartPage/>} />
              <Route path="/nuevo-producto"  render={() => <ProductForm loggedUser={this.state.loggedInUser}/>} />
              <Route path="/iniciar-sesion"  render={props => <Login  storeUser={this.setTheUser} {...props} />} />
              <Route path="/registro"  render={props => <Signup storeUser={this.setTheUser} {...props} />} />
              <Route path="/perfil" render={() => this.state.loggedInUser ? <Profile loggedUser={this.state.loggedInUser} /> : <Redirect to="/iniciar-sesion" />} />
              <Route path="/lista-de-productos" exact render={() => <ProductsList/>} />
              <Route path="/mis-datos"  render={elm =><MyInfo key={elm._id} {...elm} loggedUser={this.state.loggedInUser} />} />
              <Route path="/editar-mis-datos"  render={props => <EditProfile storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} {...props} />} />
              <Route path="/mis-productos" exact render={elm => <MyProducts {...elm} loggedUser={this.state.loggedInUser} />} />
              <Route path="/editar-mi-producto/:product_id"  render={props => <EditMyProduct {...props} />} />
              <Route path="/venta-directa"  render={props => <Directsale {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/subastas"  render={props => <Auctions {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/detalles-de-producto/:product_id"  render={props => <ProductDetails {...props} loggedUser={this.state.loggedInUser} />} />
       
  
            </Switch>
          </main>
        </Col>
      </Row>
    </Container>
    </>
    )
  }
}

export default App;
