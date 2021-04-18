import 'tachyons';

const NavBar = ()=>{
    return(
      <div className="bg-black-90  w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
           <nav className="f6 fw6 ttu tracked">
           <a className="link dim white dib mr3" href="/" title="Home">Home</a>
           <a className="link dim white dib mr3" href="/addhotel" title="Addhotel">Add Hotel</a>
           <a className="link dim white dib mr3" href="/hotels" title="hotels">hotels</a>
         </nav>
         </div>
    )

}
export default NavBar;