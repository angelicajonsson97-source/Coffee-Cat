import "../Assets/Styles/Header.css";
import Logo from "../Header/Logo.jsx";
import Menu from "../Header/Menu.jsx";

export default function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <Logo />
                <Menu />
         
            </div>
            <div className="header-title">
                <h1>Min React App</h1>
            </div>
        </header>
    );
}