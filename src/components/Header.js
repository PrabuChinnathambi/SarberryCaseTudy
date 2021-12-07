import React from 'react';
import profileIcon from '../assets/icons/profilePic.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header_container">
            <div className="header_card">
                <div className="header_left" >
                    <img src={profileIcon} alt="profile_img" />
                    <p>Welcome !</p>
                </div>
                <div className="header_right">
                    <Link to="/" type="submin" className="logOut_btn"  >Log Out</Link>
                </div>
            </div>


        </div>
    )
}

export default Header
