import Banner from '../../components/Banner/Banner'
import LogementItem from '../../components/LogementItem/LogementItem'
import styles from './Home.module.scss'

function Home() {
    return (
        <main>
            <Banner className={styles.banner}>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <section>
                <LogementItem />
            </section>
        </main>
    )
}

export default Home