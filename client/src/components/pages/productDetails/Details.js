import { Col, Container, Row, Button, Form } from 'react-bootstrap'
import React, { Component } from 'react'
import ProductService from '../../../service/products.service'
import UserService from '../../../service/User.service'


class Details extends Component { 
    constructor() {
        super()
        this.state = {
            date:"",
            User:undefined,
            product: undefined,
            currentBid: '', 
            CurrentBidder: '',
            message:''       
        }
        this.productService = new ProductService()
        this.userService = new UserService()     
    }
    componentDidMount() {        
        this.dateInterval= setInterval(() => {
            if(this.props.productProps !== undefined && this.props.productProps.currentBidder !== undefined ){
                this.userService
                .getOneUser(this.props.productProps.currentBidder)
                .then(res =>this.setState({ CurrentBidder: res.data }))
                .catch(err => console.log(err))}
                else{
                    this.setState({ CurrentBidder: 'Nadie ha pujado por este producto' })
                }
            this.setState({date:this.getTime(),  User:this.props.loggedUser, product:this.props.productProps})
        }, 1000)

      
    
    }
    
    componentWillUnmount(){
        clearInterval(this.dateInterval)
    }
    wrongDateFormat(string){
        let year= string.substring(0, 4)
        let day= string.substring(8, 10)
        let digitMonth= string.substring(5, 7)
        let month ='default'
        switch (digitMonth) {
            case '01':
                month = 'January'
            break;
            case '02':
                month = 'February'
            break;
            case '03':
                month = 'March'
            break;
            case '04':
                month = 'April'
            break;
            case '05':
                month = 'May'
            break;
            case '06':
                month = 'June'
            break;
            case '07':
                month = 'July'
            break;
            case '08':
                month = 'August'
            break;
            case '09':
                month = 'September'
            break;
            case '10':
                month = 'October'
            break;
            case '11':
                month = 'November'
            break;
            case '12':
                month = 'December'
            break;  
          }
          let horaMenosUno= string.substring(11, 19)
          let soloHoraMenosUno = horaMenosUno.substring(0,2)
          let hourToNumber= parseInt(soloHoraMenosUno, 10) + 1;
          let correctStringNumber = hourToNumber.toString()
          let hour = `${correctStringNumber}`+`${string.substring(13, 19)}`
       return (`${month} ${day}, ${year} ${hour}`)
        }

    getTime(){
      let dateTo = this.props.productProps ?  this.wrongDateFormat(`${this.props.productProps.timeLimit}`): null
        let now = new Date(),
            time = (new Date(dateTo) - now + 1000) / 1000,
            seconds = ('0' + Math.floor(time % 60)).slice(-2),
            minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
            hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
            days = Math.floor(time / (3600 * 24));  
        if( Math.sign(seconds) ===-1 || Math.sign(minutes) ===-1 || Math.sign(hours) ===-1 || Math.sign(days) ===-1){
            return (`Fuera de subasta, alcanzada la fecha límite.`)
        }else{
        return (`${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`)
        }   
    }

    handleSubmit = e => {
        e.preventDefault()
        const product_id = this.props.match.params.product_id

        this.productService
            .currentBid(product_id, this.state)
            .then(res =>{res.data.message ? this.setState({message: res.data.message}) : this.setState({message: ''})
                this.props.fetchProduct()})
            .catch(err => console.log(err))
    }


    handleSubmit2 = e => {
        e.preventDefault()
        const product_id = this.props.match.params.product_id

        this.productService
            .adquiredBy(product_id, this.props.loggedUser._id)
            .then(res =>this.props.fetchProduct())
            .catch(err => console.log(err))
    }

    handleInputChange = e => this.setState({ currentBid: e.target.value })



 
    render() { 
        console.log('locoo', this.state.message)     
    return (
    <Container>
     {this.state.product && 
    <Row>
        <Col lg={6}>    
            <img src={this.state.product.mainImage} alt={`Imágen de ${this.state.product.title}`} ></img>           
        </Col>
        <Col lg={6}>
            <div>  
            <h1>{this.state.product.title}</h1> 
            <p>{this.state.product.description}</p>   
            </div>
            <hr></hr>
            <div>
                <p>Tipo de venta: {this.state.product.salesMethod}</p>
                <p>Categoría: {this.state.product.category}</p>
                <p>ID: {this.state.product._id}</p>
            </div> 
            <hr></hr> 
            {this.state.User
            ?
            <>
            {this.state.product.salesMethod==='Subasta' ?
            <>
          
                <p>Finaliza en: {this.state.date}</p>

                {this.state.date===`Fuera de subasta, alcanzada la fecha límite.` ?
                <>{this.state.product.currentBidder===undefined ? <p>Nadie adquirió el producto de precio inicial {this.state.product.initialPrice} €</p>: 
            <p>{this.state.CurrentBidder.username} adquirió el producto por un precio de {this.state.product.currentBid} € </p>}</>
                    :
                    <>
                <p>Precio de salida: {this.state.product.initialPrice} €</p>
                <p>Puja actual: {this.state.product.currentBid}</p>
              
       
            <hr></hr> 
         
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="currentBid">
                    <Form.Label>Haga su puja</Form.Label>
                    <Form.Control type="number" name="currentBid" value={this.state.currentBid} onChange={this.handleInputChange} />
                </Form.Group>
                <Button variant="dark" type="submit">Pujar </Button>
            </Form>
            <hr></hr> 
            {this.state.message.lenght!==0 && <p>{this.state.message} </p>}
            </>}
            </>
            :
            <>
            {this.state.product.acquiredBy ?            
            <p>Producto vendido</p> 
            :
            <>
            <p>Precio: {this.state.product.initialPrice} €</p> 
            <Form onSubmit={this.handleSubmit2}>
            <Button variant="dark" type="submit" >Comprar </Button>
            </Form>
            </>
            }
            </>
            }</>
            :
            <p>Inicia sesión para más información</p>}
        </Col>
    </Row>
    }   
    </Container>
    )
    }
}
export default Details

