import Logo from '../../assets/svg/Logo'
import { Link, useMatch } from 'react-router'
import header from './Header.module.scss'

function Header() {
    //***** nav active */
    const isHomeActive = useMatch("/");
    const isAboutActive = useMatch("/about");


    return (
        <header>
            <Link to='/' >
                <Logo />
            </Link>
            <nav>
                <Link to='/' className={isHomeActive ? header.active : undefined}> Accueil </Link>
                <Link to='/about' className={isAboutActive ? header.active : undefined} > A Propos </Link>
            </nav>
        </header>
    )
}

export default Header;