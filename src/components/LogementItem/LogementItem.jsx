import styles from './LogementItem.module.scss'
import logements from '../../datas/logements.json'

function LogementItem() {
    const listItems = logements.map(logement =>
        <li key={logement.id}>
            <img src={logement.cover} alt="Photo du logement" />
            <h2>{logement.title}</h2>
        </li>
    )
    return (
        <ul className={styles.logements}>
            {listItems}
        </ul>
    )
}

export default LogementItem