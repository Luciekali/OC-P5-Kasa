import styles from './AccomodationList.module.scss'
import accomodations from '../../datas/accomodations.json'
import { useNavigate } from 'react-router'

function AccomodationList() {
    const navigate = useNavigate()
    const handleNavigate = id => navigate(`/accomodation/${id}`)

    const listItems = accomodations.map(accomodation =>
        <li
            key={accomodation.id}
            onClick={() => handleNavigate(accomodation.id)}>

            <img src={accomodation.cover} alt="Photo du logement" />
            <h2>{accomodation.title}</h2>
        </li>
    )

    return (
        <ul className={styles.accomodations}>
            {listItems}

        </ul>
    )
}

export default AccomodationList

