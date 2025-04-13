import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import aboutInfos from '../../datas/about.json'
import styles from './About.module.scss'

function About() {

    return (
        <main>
            <Banner className={styles.banner} />

            <section>
                {aboutInfos.map((collapse, index) => (
                    <Collapse
                        key={index}
                        title={collapse.title}
                        description={collapse.description} />
                ))
                }
            </section>
        </main>


    )
}

export default About