import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import { Container, Row, Col, Button } from 'react-bootstrap'
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductsList from './pages/productsList/ProductsList'
import HeaderNavbar from './layout/headerNavbar/HeaderNavbar'
import Home from './pages/home/home'
import StartPage from './pages/startPage/StartPage'
import ProductForm from './pages/productForm/ProductForm'
import Navigation from './layout/navigation/navigation'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import AuthServices from '../service/auth.service'
import Profile from './pages/profile/Profile'

class App extends Component {

  constructor() {
    super()
    this.state = {loggedInUser: undefined}
    this.authServices = new AuthServices
}

componentDidMount = () =>{
  this.authServices
    .isLoggedIn()
    .then(response => this.setState({loggedInUser: response.data}))
    .catch(err => this.setState({loggedInUser: undefined}))
} 

setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El nuevo estado de App es:', this.state))

render() {

  return (
    <>
    <HeaderNavbar/>
    <Container fluid>
      <Row>
        <Col xs={1}>
          <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />
        </Col>
        <Col  xs={11}>        
          <main> 
            <Switch>
              <Route path="/" exact render={() => <Home/>} />
              <Route path="/inicio"  render={() => <StartPage/>} />
              <Route path="/nuevo-producto"  render={() => <ProductForm/>} />
              <Route path="/lista-de-productos"  render={() => <ProductsList/>} />
              <Route path="/iniciar-sesion"  render={props => <Login  storeUser={this.setTheUser} {...props} />} />
              <Route path="/registro"  render={props => <Signup storeUser={this.setTheUser} {...props} />} />
              <Route path="/perfil" render={() => this.state.loggedInUser ? <Profile loggedUser={this.state.loggedInUser} /> : <Redirect to="/iniciar-sesion" />} />
              {/* <ProductsList/> */}
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
