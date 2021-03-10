import {Navbar} from 'react-bootstrap';

const NavBar = ()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/AddHotel">Add New Hotel</Navbar.Brand>
    <Navbar.Brand href="/hotelList">Hotels List</Navbar.Brand>
  </Navbar>
    )

}
export default NavBar;