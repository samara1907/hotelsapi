import {Navbar} from 'react-bootstrap';

const NavBar = ()=>{
    return(
        <Navbar collapseOnSelect expand="sm" width="100%" bg="dark" variant="dark">
    <Navbar.Brand href="/addhotel">Add New Hotel</Navbar.Brand>
    <Navbar.Brand href="/hotels">Hotels List</Navbar.Brand>
  </Navbar>
    )

}
export default NavBar;