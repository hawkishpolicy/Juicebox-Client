import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
    <form>
      <input 
      id="searchBarInput"
      type="text"
      placeholder="Search Here" />
    </form>
    
    <div>
      <button>Posts</button>
      <button>Log In</button>
      <button>Log Out</button>
      
    </div>
    </div>
  );
};

export default Navbar;