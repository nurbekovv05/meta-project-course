import React from 'react';
import {NavLink} from "react-router-dom";
import LOGO from "./../../image/логотип.svg"

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <div className="header-logo-left">

                            <NavLink to={"/Home"}> <img src={LOGO} alt=""/></NavLink>
                            <NavLink className="nav-header" to={"/School"}>О школе</NavLink>
                          <NavLink className="nav-header" to={"/Course"}>Наши курсы</NavLink>
                          <NavLink className="nav-header" to={"/About"}>О нас</NavLink>
                        </div>

                        <div className="header-logo-right">
                            <NavLink className="nav-right" to={"/Sign"}>Войти</NavLink>
                            <NavLink to={"/Follow"} className="button-header">Подписаться</NavLink>
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Header;