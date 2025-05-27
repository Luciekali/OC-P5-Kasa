import styles from './Slideshow.module.scss'
import arrow from '../../assets/arrow_slide_show.svg'
import { useState } from 'react'

function Slideshow({ accomodation }) {

    const pictures = accomodation.pictures
    const [currentImage, setCurrentImage] = useState(0);
    const slide = pictures[currentImage]


    function showNext() {
        const lastSlide = pictures.length;
        if (currentImage < lastSlide - 1) {
            setCurrentImage(currentImage + 1);
        }
        else {
            setCurrentImage(0)
        }
    }

    function showPrev() {
        const lastSlide = pictures.length;
        if (currentImage != 0) {
            setCurrentImage(currentImage - 1);
        }
        else {
            setCurrentImage(lastSlide - 1);
        }
    }

    return (
        <section className={styles.slideshow}>
            <img src={slide} className={styles.slide} alt='Photo du logement' />
            {pictures.length > 1 &&
                <>
                    <span>
                        <button className={styles.button_left} onClick={showPrev}>
                            <img src={arrow} className={styles.arrow_left} />
                        </button>
                        <button className={styles.button_right} onClick={showNext}>
                            <img src={arrow} className={styles.arrow_right} />
                        </button>
                    </span>
                    <p>{currentImage + 1}/{pictures.length}</p>
                </>
            }
        </section>
    )
}

export default Slideshow