import React from "react";
import '../Styles/Header.css';
const Header = ({ backgroundColor, visibility }) => {
    const customStyle = {
        backgroundColor: backgroundColor || '#000',
        visibility: visibility || 'block'
    }
    return (
        <div className="header-div" style={backgroundColor={backgroundColor}}>
            <div className="logo" style={visibility={visibility}}>e!</div>
            <div className="login-div">
                <button className="login-button">Login</button>
                <button className="account-button">Create an account</button>
            </div>
        </div>
    )
}

export default Header;