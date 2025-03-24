import logo from '../../assets/logo.svg'
import { Link } from 'react-router'

function Header() {
    return (
        <div>
            <Link to='/'>
                <img src={logo} alt="Logo Kasa" />
            </Link>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/about'>A Propos</Link>
            </nav>
        </div>
    )
}

export default Header;