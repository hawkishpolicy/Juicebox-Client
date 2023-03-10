import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
      <form>
        <input
        id={"searchBarInput"}
        type={"text"}
        placeholder={"Search Here"}
        ></input>
      </form>
      
      <button>Posts</button>
      <button>Log In</button>
    </div>
  );
};

export default Navbar;