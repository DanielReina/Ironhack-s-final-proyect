import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductsList from './pages/productsList/ProductsList'
import HeaderNavbar from './layout/headerNavbar/HeaderNavbar'
import Home from './pages/home/home'
import StartPage from './pages/startPage/StartPage'
import ProductForm from './pages/productForm/ProductForm'

class App extends Component {

  constructor() {
    super()
    this.state = { 
  }
}

render() {

  return (
    <>
      <HeaderNavbar/>
      <main> 
      <Switch>
        <Route path="/" exact render={() => <Home/>} />
        <Route path="/inicio"  render={() => <StartPage/>} />
        <Route path="/nuevo-producto"  render={() => <ProductForm/>} />
        <Route path="/lista-de-productos"  render={() => <ProductsList/>} />

      {/* <ProductsList/> */}
      </Switch>
      </main>
      </>
    )
  }
}

export default App;
