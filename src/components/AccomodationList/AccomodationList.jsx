import styles from './AccomodationList.module.scss'
import accomodations from '../../datas/accomodations.json'
import { Link } from 'react-router'

function AccomodationItem() {
    const listItems = accomodations.map(accomodation =>

        <li key={accomodation.id}>
            <Link
                key={accomodation.id}
                to={`accomodation/${accomodation.id}`}>

                <img src={accomodation.cover} alt="Photo du logement" />
                <h2>{accomodation.title}</h2>

            </Link> </li>
    )
    return (
        <ul className={styles.accomodations}>
            {listItems}
        </ul>
    )
}

export default AccomodationItem