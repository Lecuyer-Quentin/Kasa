import React from "react";

export default function Footer({footerLogo, footerText}) {
    return (
        <footer className="footer">
            <img className="footer__logo" src={footerLogo} alt="logo.png" />
            <p className="footer__text">{footerText}</p>   
        </footer>
    )
 }