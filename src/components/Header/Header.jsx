import logo from '../../assets/logo.svg'
import { Link } from 'react-router'
import './Header.module.scss'

function Header() {
    return (
        <header>
            <Link to='/'>
                <img src={logo} alt="Logo Kasa" />
            </Link>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/about'>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header;