import './Footer.module.scss'
import Logo from '../../assets/svg/Logo'

function Footer() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer>
            <Logo />
            <p>© {year} Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer