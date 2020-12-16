<Navbar bg="light" expand="lg">
<Navbar.Brand href="/" className="ml-auto"> <img alt="Logotipo" src={logo}  className="d-inline-block align-top" style={{ width: '100px' }}/>Portada</Navbar.Brand>

  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" value={this.state.text}  className="mr-sm-2" onChange={(text) => this.filter(text)}/>
 
    </Form>
  </Navbar.Collapse>
</Navbar>