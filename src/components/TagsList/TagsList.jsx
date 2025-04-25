import styles from '../TagsList/TagsList.module.scss'

function TagsList({ tags }) {
    const tagList = tags.map(tag =>
        <li key={tag}>
            {tag}</li>)
    return (
        <ul className={styles.tags}>{tagList}</ul>
    )
}

export default TagsList;