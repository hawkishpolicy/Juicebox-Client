import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
      <button>Register</button>
      <button>Log In</button>
      <button>Log Out</button>
      
    </div>
    </div>
  );
};

export default Navbar;