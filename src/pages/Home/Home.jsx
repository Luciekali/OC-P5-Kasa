import Banner from '../../components/Banner/Banner'
import AccomodationList from '../../components/AccomodationList/AccomodationList'
import styles from './Home.module.scss'

function Home() {
    return (
        <main>
            <Banner className={styles.banner}>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <AccomodationList />
        </main>
    )
}

export default Home