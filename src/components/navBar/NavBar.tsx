import React from 'react'
import "./NavBar.scss"
import f1_logo from "./../../img/f1_logo.png"
import { Link } from 'react-router-dom'
import { ROUTES_NAMES } from '../../routes/RoutesName'


const NavBar = () => {
    return (
        <div className="container navBar">
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logox">
                    <Link to={ROUTES_NAMES.HOME}>
                        <img src={f1_logo} alt="" />
                    </Link>
                </label>
                <ul>
                    <li>
                        <Link to={ROUTES_NAMES.DRIVER_STANDING}>
                            d
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTES_NAMES.CONSTRUCTOR_STANDING}>
                            c
                        </Link>
                    </li>
                    <li><a href="##">Services</a></li>
                    <li><a href="##">Contact</a></li>
                    <li><a href="##">Feedback</a></li>
                </ul>
            </nav>
            <section></section>

        </div>
    )
}

export default NavBar