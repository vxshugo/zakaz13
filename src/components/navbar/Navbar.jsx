import React, { useState } from 'react'
import "./navbar.css"
const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={handleClick}>
                    <i className={open ? 'fas fa-times' : 'fas fa-bars'} style={{ color: "#fff" }} />
                </div>
                <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Басты бет
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/razdel/test" className="nav-link">
                            Тест
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/razdel/praktika" className="nav-link">
                            Практика
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/razdel/lesson" className="nav-link">
                            Лекция
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/razdel/srs" className="nav-link">
                            СРС
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/razdel/rp" className="nav-link">
                            РК
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/razdel/mainTest" className="nav-link">
                            Емтихан сұрақтары
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar