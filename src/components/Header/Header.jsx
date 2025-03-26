import logo from '../../assets/logo.svg'
import { Link, useMatch } from 'react-router'
import header from './Header.module.scss'

const Header = () => {
    //***** nav active */
    const isHomeActive = useMatch("/");
    const isAboutActive = useMatch("/about");


    return (
        <header>
            <Link to='/' >
                <img src={logo} alt="Logo Kasa" />
            </Link>
            <nav>
                <Link to='/' className={isHomeActive ? header.active : undefined}> Accueil </Link>
                <Link to='/about' className={isAboutActive ? header.active : undefined} > A Propos </Link>
            </nav>
        </header>
    )
}

export default Header;