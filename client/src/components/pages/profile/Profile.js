import { Container } from 'react-bootstrap'
import React, { Component } from 'react'

class Profile extends Component {
    
     
    
    render(){
       
    return (
        <Container>
            <h1>¡Bienvenid@,{this.props.loggedUser.name} !</h1>
        </Container>
    )
}
}

export default Profile