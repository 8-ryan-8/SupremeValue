import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Logo</Link>
            <ul>
                <li>
                    <Link to="/myReviews">My Reviews</Link>
                </li>
                <li>
                    <Link to="/addReview">Add Review</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    )
}