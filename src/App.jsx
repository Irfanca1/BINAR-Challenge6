import { Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import './App.css'

function App() {
  return <>
      <div>
        <Navbar collapseOnSelect>
          <Container>
            <Navbar.Brand to='/' className='navbar-brand' />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/#our-service' className='text-dark fw-500 nav-link me-4'>Our Service</Nav.Link>
                <Nav.Link as={Link} to='/#why-us' className='text-dark fw-500 nav-link me-4'>Why Us</Nav.Link>
                <Nav.Link as={Link} to='' className='text-dark fw-500 nav-link me-4'>Testimonial</Nav.Link>
                <Nav.Link as={Link} to='' className='text-dark fw-500 nav-link me-4'>FAQ</Nav.Link>
                <Nav.Link as={Link} to='' className='text-light fw-bold btn btn-success'>Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cars' element={<Cars />} />
        </Routes>
      </div>
    </>
}

export default App
