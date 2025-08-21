import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ padding: "10px", background: "#ddd" }}>
            <NavLink to="/" style={{ margin: "0 10px" }}>
                Home
            </NavLink>
            <NavLink to="/services" style={{ margin: "0 10px" }}>
                Services
            </NavLink>
            <NavLink to="/contact" style={{ margin: "0 10px" }}>
                Contact
            </NavLink>
            <NavLink to="/blog" style={{ margin: "0 10px" }}>
                Blog
            </NavLink>
        </nav>
    );
};

export default Navbar;
