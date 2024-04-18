import { Link } from "react-router-dom";


const Navbar = () => {
    const navItems = <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="">Dashboard</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navItems}
            </ul>
          </div>
          <Link to="/" className="text-xl font-bold text-black">UtilTrack</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navItems}
          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-primary rounded-[50px] bg-violet-500 text-black font-medium border-0  shadow-xl hover:bg-violet-400 py-4">Login Now</button>
        </div>
      </div>
    );
};

export default Navbar;