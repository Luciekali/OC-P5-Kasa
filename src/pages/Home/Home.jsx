import Banner from '../../components/Banner/Banner'
import styles from './Home.module.scss'

function Home() {
    return (
        <Banner className={styles.banner}>
            <h1>Chez vous, partout et ailleurs</h1>
        </Banner>

    )
}

export default Home