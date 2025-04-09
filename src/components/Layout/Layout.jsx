import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
import './Layout.scss'

function Layout() {
    return (
        <div className='layout'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout