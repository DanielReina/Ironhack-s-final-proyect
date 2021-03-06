import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Container, Row, Col, Navbar, FormControl,Form, Nav, NavDropdown} from 'react-bootstrap'
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import logo from './layout/headerNavbar/misubastas.jpeg'
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
import WatchAuctions from './pages/auctions/watchAuction'
import ArtAuctions from './pages/auctions/ArtAuctions';
import JewelryAuctions from './pages/auctions/JewelryAuctions';
import OtherAuctions from './pages/auctions/OtherAuctions';
import ArtDS from './pages/directsale/ArtDS';
import WatchDS from './pages/directsale/WatchDS';
import OtherDS from './pages/directsale/OtherDS';
import JewelryDS from './pages/directsale/JewelryDS';
import HeaderNavbar from './layout/headerNavbar/HeaderNavbar'
import FilterList from './pages/productsList/FilterList'
import Wonproducts from './pages/profile/wonProducts/WonProducts'
import {withRouter} from 'react-router'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedInUser: undefined,
      productBackup:[],
      findText:'',
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
      const field = itemDataTitle+" "+itemDataDescp
      const textData = text.toUpperCase()
      return field.indexOf(textData) > -1
  })
  this.setState({
      products: newData,
      findText: text,
  })
  this.props.history.push('/productos-filtrados')

}


setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El nuevo estado de App es:', this.state))

render() {

  return (
    <>
{/* <HeaderNavbar storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} /> */}
<Navbar   expand="lg">
<Navbar.Brand href="/" xs className="ml-auto" id='mis-subastas' > <h1>Mis Subastas</h1> </Navbar.Brand>

  <Navbar.Collapse xs id="basic-navbar-nav">
    <Nav className="mr-auto"> 
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Buscar Productos..." value={this.state.text}  className="mr-sm-2" onChange={(text) => this.filter(text)}/>
 
    </Form>
  </Navbar.Collapse>
</Navbar>
    <Container fluid>
      <Row>
        <Col id='navig' sm={1}>
          <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />
        </Col>
        <Col  md={11}>
      
          {/* {this.state.findText.length!==0 && this.state.products.length!==0 ? 
                 
            <Container>
              <h1>Listado de productos</h1>
              <Row>           
                  {this.state.products.map(elm => <ProductCard key={elm._id} {...elm}/>)}           
              </Row>
            </Container> 
            : <></> }      */}
          <main> 
            <Switch>
              <Route path="/productos-filtrados" exact render={() => <FilterList text={this.state.findText} products={this.state.products} /> } />
              <Route path="/" exact render={() => <Home/>} />
              <Route path="/inicio"  render={() => <StartPage storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />} />
              <Route path="/nuevo-producto"  render={props  => <ProductForm loggedUser={this.state.loggedInUser} {...props}/>} />
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
              <Route path="/subastas-relojes" exact render={props => <WatchAuctions {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/subastas-arte" exact render={props => <ArtAuctions {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/subastas-joyas" exact render={props => <JewelryAuctions {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/subastas-otros" exact render={props => <OtherAuctions {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/vd-arte" exact render={props => <ArtDS {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/vd-relojes" exact render={props => <WatchDS {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/vd-otros" exact render={props => <OtherDS {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/vd-joyas" exact render={props => <JewelryDS {...props} loggedUser={this.state.loggedInUser} />} />
              <Route path="/productos-adquiridos" exact render={props => <Wonproducts {...props} loggedUser={this.state.loggedInUser} />} />
            </Switch>
          </main>
        </Col>
      </Row>
    </Container>
    <footer>
    <p>Producto realizado por: Daniel Reina Ramos, 2020</p>
    </footer>
    </>
    )
  }
}

export default withRouter(App);

