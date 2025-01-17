import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import SearchBox from './SearchBox';

function Header() {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">PROSHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SearchBox/>
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/cart">Cart <CiShoppingCart style={{ fontSize: '25px' }} /></Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>

            ) : (
              <Nav.Link as = {Link} to="/login">Login <IoPersonOutline style={{ fontSize: '20px' }} /></Nav.Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id="adminmenue">
                  <NavDropdown.Item href='/admin/userlist'>Users</NavDropdown.Item>
                  <NavDropdown.Item href='/admin/productlist'>Products</NavDropdown.Item>
                  <NavDropdown.Item href='/admin/orders'>Orders</NavDropdown.Item>

              </NavDropdown>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;