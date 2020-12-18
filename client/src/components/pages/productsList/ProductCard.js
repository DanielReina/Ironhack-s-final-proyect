import { Col, Card, ListGroupItem, ListGroup, ButtonGroup } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

class ProductCard extends Component { 
    constructor() {
        super()
        this.state = {
            date:"",
            User:undefined
        }
                
    }
    componentDidMount() { 
        this.dateInterval= setInterval(() => {
            this.setState({date:this.getTime(),  User:this.props.loggedUser})
        }, 1000) 
    }
    componentWillUnmount() {
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
        let dateTo =this.wrongDateFormat(`${this.props.timeLimit}`)
        let now = new Date(),
            time = (new Date(dateTo) - now + 1000) / 1000,
            seconds = ('0' + Math.floor(time % 60)).slice(-2),
            minutes = ('0' + Math.floor(time / 60 % 60)).slice(-2),
            hours = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
            days = Math.floor(time / (3600 * 24));  
        if( Math.sign(seconds) ===-1 || Math.sign(minutes) ===-1 || Math.sign(hours) ===-1 || Math.sign(days) ===-1){
            return (`Dejó de estar a la venta en ${dateTo}`)
        }else{
        return (`${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`)
        // return (`${this.state.days} dias, ${this.state.hours} horas, ${this.state.minutes} minutos, ${this.state.seconds} segundos`)
        }   
    }
    render() {
      return (
        <Col lg={4}>
            <Card className="product-card">
                <Card.Img variant="top" src={this.props.mainImage} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                 
                </Card.Body>
                    <ListGroup className="list-group-flush">  
                    {this.props.salesMethod === 'Subasta' 
                    ?
                    <>
                    <ListGroupItem>Precio inicial: {this.props.initialPrice} €</ListGroupItem>       
                    <ListGroupItem>Finaliza en: {this.state.date}</ListGroupItem>
                    </>
                    :
                    <ListGroupItem>Precio: {this.props.initialPrice} €</ListGroupItem>
                    }
                    </ListGroup>
                    <ButtonGroup aria-label="Basic example" style={{ width: '100%' }}>
                    <Link to={`/detalles-de-producto/${this.props._id}`} className="btn btn-sm btn-dark">Ver detalles</Link>                             
                    </ButtonGroup>   
                </Card>
        </Col>
    )
    }
}
export default ProductCard

