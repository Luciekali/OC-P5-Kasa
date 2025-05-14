import styles from '../TagsList/TagsList.module.scss'

function TagsList({ tags }) {
    const tagList = tags.map((tag, index) =>
        <li key={index}>
            {tag}</li>)
    return (
        <ul className={styles.tags}>{tagList}</ul>
    )
}

export default TagsList;