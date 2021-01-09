import React from 'react'
import logo from "./images/dn_logo.png"
import "./header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__menu">

                <a href="/" className="header__menu__logo"><img src={logo} alt="logo"/></a>

                <div className="header__nav">
                    <nav>
                        <a href="/contacto">Contacto</a>
                        <a href="/#proyectos">Proyecto</a>
                        <a href="https://github.com/davidnavarrodev/">Github</a>
                    </nav>
                </div>



            </div>
        </div>
    )
}

export default Header
