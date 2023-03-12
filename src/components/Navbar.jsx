import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div id="navbar">
    <form>
      <input 
      id="searchBarInput"
      type="text"
      placeholder="Search Here" />
    </form>
    
    <div id="navbarButtons">
      <button>Posts</button>
      {/* <Link to={"/Register"}><button>Register</button></Link>
      <Link to={"/login"}><button>Log in</button></Link> */}
      <button>Log Out</button>
    </div>
    </div>
  );
};

export default Navbar;