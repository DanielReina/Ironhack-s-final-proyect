import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './home.css'
import logo from '../../layout/headerNavbar/misubastas.jpeg'



const Home = props => {
    return(
        <>
        <Container>
     
        <Row className="justify-content-md-center">
        <div className='home' >
        <div>
       <h1> Compra, vende y... <span>Subasta</span></h1>
       </div>
      
       <Link to='/inicio'><img alt="Logotipo" src={logo} /></Link>
       <p>Pulsa en la imagen para comenzar</p>
       </div>
       </Row>
  
       </Container>
        </>
    )
    
}

export default Home