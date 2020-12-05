import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ProductsList from './pages/productsList/ProductsList'

class App extends Component {

  constructor() {
    super()
    this.state = { 
  }
}

render() {

  return (
<body> <ProductsList/></body>
  )
}
}

export default App;
