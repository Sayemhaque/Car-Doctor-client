import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext} from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error))
    }
  const navItems = <>
   <li> <Link to='/'>Home</Link></li>
   <li><Link>About</Link></li>
    {user ? <>
        <li><Link to={`/orders`}>Orders</Link></li>
        <li><a onClick={handleLogOut}>Log Out</a></li> 
    </>:<li><Link to="/login">Log In</Link></li>}
  </>
    return (
        <div className="bg-base-200 py-3">
            <div className="navbar md:max-w-5xl mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <img src={logo} className="h-14" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                   <button className="btn btn-warning">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

