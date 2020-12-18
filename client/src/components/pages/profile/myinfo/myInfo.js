import { Col, Row, Container} from 'react-bootstrap'
import './myInfo.css'



const Myinfo = (props) => {

    return (
        <>
        {props.loggedUser &&
        <Container>
        <Row>
        <Col lg={10}>
        <div className='pInformation' >
        <h1>INFORMACIÓN PERSONAL</h1>
        <hr/>
        <p>Nombre:<span> {props.loggedUser.name}</span></p>
        <p>Apellidos:<span> {props.loggedUser.lastName}</span></p>
        <p>Nombre de usuario:<span> {props.loggedUser.username}</span></p>
        <p>Correo electrónico:<span> {props.loggedUser.email}</span></p>
        </div>           
        </Col>
        </Row>
        </Container>}
        </>
    )
}

export default Myinfo

