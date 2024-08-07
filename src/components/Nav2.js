import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav2.css'

const Nav2 = () => {
    return (
        <div>
            <Navbar className='nav2'>
                <Container >
                    <Nav >
                        <Nav.Link href="/recipes" className='bt1 text-light'>Search Recipe</Nav.Link>
                        <Nav.Link href="/filrecipe" className='bt2 text-light'>Search Cuisine</Nav.Link>
                        <Nav.Link href="/randrecipe" className='bt2 text-light'>Explore new Recipes!</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Nav2;