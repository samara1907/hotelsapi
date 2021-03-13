import './Nav.css';

const NavBar = ()=>{
  
    return(
  <div className="topnav" id="myTopnav">
  <a href="/" className="active">Home</a>
  <a href="/addhotel">ADD NEW HOTEL</a>
  <a href="/hotels">HOTELS LIST</a>
</div>
    )

}
export default NavBar;