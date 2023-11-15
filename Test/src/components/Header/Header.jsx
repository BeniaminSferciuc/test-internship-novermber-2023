import style from "./Header.module.css";
import { IoLogoJavascript } from "react-icons/io5";
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className={style.header}>
            <nav className={style.nav} >
                <IoLogoJavascript size={50} color="black" />
                <ul className={style.navbar}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
