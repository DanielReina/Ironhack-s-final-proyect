// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css';

// import { Container, Row, Col} from 'react-bootstrap'
// import React, { Component } from 'react'
// import { Switch, Route, Redirect } from 'react-router-dom'

// import HeaderNavbar from './layout/headerNavbar/HeaderNavbar'
// import Home from './pages/home/home'
// import StartPage from './pages/startPage/StartPage'
// import ProductForm from './pages/profile/productForm/ProductForm'
// import Navigation from './layout/navigation/navigation'
// import Signup from './pages/signup/Signup'
// import Login from './pages/login/Login'
// import AuthServices from '../service/auth.service'
// import ProductServices from '../service/products.service'
// import Profile from './pages/profile/Profile'
// import ProductsList from './pages/productsList/ProductsList'
// import MyInfo from './pages/profile/myinfo/myInfo'
// import EditProfile from './pages/profile/EditProfile'
// import MyProducts from './pages/profile/myproducts/MyProducts'
// import EditMyProduct from './pages/profile/myproducts/EditMyProduct'
// import Directsale from './pages/directsale/DirectSale'
// import Auctions from './pages/auctions/auctions'
// import ProductDetails from './pages/productDetails/Productdetais.js'



// class App extends Component {

//   constructor() {
//     super()
//     this.state = {loggedInUser: undefined, products:[], filteredProduct:{}}
//     this.authServices = new AuthServices
//     this.productServices = new ProductServices
// }

// componentDidMount = () =>{
//   this.authServices
//     .isLoggedIn()
//     .then(response => this.setState({loggedInUser: response.data}))
//     .catch(err => this.setState({loggedInUser: undefined}))

//   this.productServices
//     .getProducts()
//     .then(response => this.setState({products: response.data}))
//     .catch(err => this.setState({products: []})) 
// } 

// search = value => {    
//   const copyProducts= this.state.products
//   console.log(copyProducts)
//   const found = copyProducts.filter(element => element.name.includes(value) )
//   this.setState({filteredProduct:found})
//   console.log('hola', found)

// }

// setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El nuevo estado de App es:', this.state))

// render() {
// console.log('app consola',this.state.products)
//   return (
//     <>
//     <HeaderNavbar products={this.state.products} />
//     <Container fluid>
//       <Row>
//         <Col xs={1}>
//           <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />
//         </Col>
//         <Col  xs={11}>        
//           <main> 
//             <Switch>
//               <Route path="/" exact render={() => <Home/>} />
//               <Route path="/inicio"  render={() => <StartPage/>} />
//               <Route path="/nuevo-producto"  render={() => <ProductForm loggedUser={this.state.loggedInUser}/>} />
//               <Route path="/iniciar-sesion"  render={props => <Login  storeUser={this.setTheUser} {...props} />} />
//               <Route path="/registro"  render={props => <Signup storeUser={this.setTheUser} {...props} />} />
//               <Route path="/perfil" render={() => this.state.loggedInUser ? <Profile loggedUser={this.state.loggedInUser} /> : <Redirect to="/iniciar-sesion" />} />
//               <Route path="/lista-de-productos" exact render={() => <ProductsList/>} />
//               <Route path="/mis-datos"  render={elm =><MyInfo key={elm._id} {...elm} loggedUser={this.state.loggedInUser} />} />
//               <Route path="/editar-mis-datos"  render={props => <EditProfile storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} {...props} />} />
//               <Route path="/mis-productos" exact render={elm => <MyProducts {...elm} loggedUser={this.state.loggedInUser} />} />
//               <Route path="/editar-mi-producto/:product_id"  render={props => <EditMyProduct {...props} />} />
//               <Route path="/venta-directa"  render={props => <Directsale {...props} loggedUser={this.state.loggedInUser} />} />
//               <Route path="/subastas"  render={props => <Auctions {...props} loggedUser={this.state.loggedInUser} />} />
//               <Route path="/detalles-de-producto/:product_id"  render={props => <ProductDetails {...props} loggedUser={this.state.loggedInUser} />} />
//               {/* <Route path="/editar-producto"  render={props => <EditProducts {...props} />} /> */}
  
//             </Switch>
//           </main>
//         </Col>
//       </Row>
//     </Container>
//     </>
//     )
//   }
// }

// export default App;
