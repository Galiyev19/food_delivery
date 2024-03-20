import React from "react"
import {Link} from "react-router-dom"

import "./header.css"

const Header  = () => {
    return (
        <header className="header">
            <div className="header_offset">
                <Link to="/">FOOD</Link>
                <div className="header_center_side">
                    <input className="header_serch"/>
                    <button>найти</button>
                </div>
                <div className="header_left_side">
                    <button className="sign_in_btn">Войти</button>
                    <button className="sign_up_btn">Зарегистрироваться</button>
                </div>
            </div>
        </header>
    )
}

export default Header