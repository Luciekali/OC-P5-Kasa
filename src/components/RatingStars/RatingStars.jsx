import StarOn from '../../assets/svg/star-active.svg'
import StarOff from '../../assets/svg/star-inactive.svg'
import styles from './RatingStars.module.scss'

function RatingStars({ rating }) {
    const ratingNumber = parseInt(rating, 10)

    const starActive = (Array(ratingNumber).fill(null))
    const starInactive = (Array(5 - ratingNumber).fill(null))

    const starActiveList = starActive.map((_, index) =>
        <li key={index} ><img src={StarOn} alt={`etoile colorée : le logement est évalué ${rating}/5`} /></li>)

    const starInactiveList = starInactive.map((_, index) =>
        <li key={index} ><img src={StarOff} alt={`etoile colorée : le logement est évalué ${rating}/5`} /></li>)
    return (
        <ul className={styles.rating_list}>
            {starActiveList}
            {starInactiveList}
        </ul>
    )
}

export default RatingStars