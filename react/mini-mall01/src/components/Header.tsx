import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(props : { isLogin :boolean, login :any }) {

  let navi = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={ () => navi('/') } style={{cursor:'pointer'}}>Mini-Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={ () => navi('/products') }>Products</Nav.Link>
            <Nav.Link onClick={ () => navi('/cart') }>Cart</Nav.Link>
            <Nav.Link onClick={ () => navi('/event') }>Event</Nav.Link>
            <Nav.Link onClick={ () => navi('/about') }>About</Nav.Link>
            
            {/* 드롭다운 메뉴
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */
            }

          </Nav>
          <div className='sign'>
            {
              props.isLogin === false?
              <>
                <Nav.Link href="#sign-in">sign-in</Nav.Link>
                <Nav.Link href="#sign-up">sign-up</Nav.Link>
              </>
              :
              <>
                { props.login.data && <span>{ props.login.data.name }</span> }
                { props.login.isLoading && <span>loading ...</span> }
                { props.login.error && <span>login error ...</span> }
              </>
            }
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;