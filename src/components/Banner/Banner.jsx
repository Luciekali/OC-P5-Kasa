import styles from './Banner.module.scss'

function Banner({ children, className }) {

    return (
        <div className={`${styles.banner} ${className || ''}`}>
            {children}
        </div>
    )
}

export default Banner


