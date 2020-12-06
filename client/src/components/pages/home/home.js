import { Link } from 'react-router-dom'


const Home = props => {
    return(
        <>
       <h1> Bienvenido a mis subastas</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit delectus modi neque, officia dolores dolorum provident corrupti enim aspernatur quod! Odit atque totam fugiat et quasi voluptatibus, dolorum illo.</p>
       <Link className="btn btn-dark" to='/inicio'>Empezar</Link>
        </>
    )
    
}

export default Home