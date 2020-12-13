import { Col} from 'react-bootstrap'



const Myinfo = (props) => {

    return (
        <Col lg={4}>
        <h1>Información personal</h1>
        <hr/>
        <p>Nombre: {props.loggedUser.name}</p>
        <p>Apellidos: {props.loggedUser.lastName}</p>
        <p>Nombre de usuario: {props.loggedUser.username}</p>
        <p>Correo electrónico: {props.loggedUser.email}</p>

            
        </Col>
    )
}

export default Myinfo

