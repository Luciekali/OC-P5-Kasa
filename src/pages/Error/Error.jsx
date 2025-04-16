import styles from './Error.module.scss'
import { Link } from 'react-router'

function Error() {
    return (
        <main className={styles.error}>
            <p>404</p>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>

            <Link to='/'>Retourner sur la page d'accueil </Link>
        </main>
    )
}

export default Error