import { useRef, useState, useEffect } from "react"
import styles from './Collapse.module.scss'
import Arrow from '../../assets/svg/Arrow'

function Collapse({ title, content, }) {

    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);
    return (

        <div className={`${styles.collapse} 
                        ${isOpen ? styles.active : styles.inactive}`}>
            <h2>
                <label> <input type='button' onClick={() => setIsOpen(!isOpen)} />{title}
                    <Arrow className={styles.arrow} /></label>
            </h2>


            <div className={styles.content}
                ref={contentRef}
                style={{ height }}>
                {content}</div>

        </div>

    )
}

export default Collapse 