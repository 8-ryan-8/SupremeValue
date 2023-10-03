import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    const path = window.location.pathname;

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Logo</Link>
            <ul>
                <li>
                    <Link to="/addReview">Add Review</Link>
                </li>
            </ul>
        </nav>
    )
}