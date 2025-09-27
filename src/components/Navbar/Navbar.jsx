import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-sm md:text-xl">CS — Ticket System</a>
  </div>
  <div className="navbar-end md:flex">
    <ul className="menu menu-horizontal px-1 cursor-pointer">
      <li><a>Home</a></li>
      <li className="hidden md:block"><a>FAQ</a></li>
      <li className="hidden md:block"><a>Changelog</a></li>
      <li className="hidden md:block"><a>Blog</a></li>
      <li className="hidden md:block"><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  
    <a className="btn justify-end bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">+ New Ticket</a>
</div>
      </div>
        </div>
    );
};

export default Navbar;