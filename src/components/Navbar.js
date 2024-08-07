import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

const NavigationBar = () => {
    return (
        <div>
            <Navbar className='customNavbar'>
                <Container>
                    <Navbar.Brand href="/Home" className='text-light'><strong>RecipeHunt</strong></Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/Home" className='text-light'>Home</Nav.Link>
                        <Nav.Link href="/recipes" className='text-light'>Recipes</Nav.Link>
                        <Nav.Link href="/movies" className='text-light'>About</Nav.Link>
                        <Nav.Link href="/songs" className='text-light'>Contact</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar