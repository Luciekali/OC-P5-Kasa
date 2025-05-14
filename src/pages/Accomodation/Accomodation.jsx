import { useParams, useNavigate } from 'react-router'
import accomodations from '../../datas/accomodations.json'
import Slideshow from '../../components/Slideshow/Slideshow';
import TagsList from '../../components/TagsList/TagsList';
import styles from '../Accomodation/Accomodation.module.scss'
import Collapse from '../../components/Collapse/Collapse'
import EquipmentsList from '../../components/EquipmentsList/EquipmentsList'
import RatingStars from '../../components/RatingStars/RatingStars';
import { useEffect } from 'react';

function Accomodation() {
    const navigate = useNavigate()
    const { id } = useParams();
    const accomodation = accomodations.find((item) => item.id === id)

    useEffect(() => {

        if (!accomodation) {
            navigate('/404', { replace: true });
        }
    }, [accomodation, navigate]);

    if (!accomodation) return null;

    return (
        <main>
            <Slideshow accomodation={accomodation}></Slideshow>
            <section className={styles.accomodation} >
                <div className={styles.wrapper_informations}>
                    <div className={styles.accomodation_informations}>
                        <h2>{accomodation.title}</h2>
                        <p>{accomodation.location}</p>
                        <TagsList tags={accomodation.tags} />
                    </div>
                    <div className={styles.wrapper_host}>
                        <div className={styles.host_informations}>
                            <p>{accomodation.host.name}</p>
                            <img src={accomodation.host.picture}></img>
                        </div>
                        <RatingStars rating={accomodation.rating} />
                    </div>
                </div>

                <div className={styles.collapses_wrapper}>
                    <Collapse title={'Description'}
                        content={<p>{accomodation.description}</p>} />
                    <Collapse title={'Equipements'}
                        content={<EquipmentsList equipments={accomodation.equipments} />} />
                </div>
            </section>

        </main>
    )
}

export default Accomodation