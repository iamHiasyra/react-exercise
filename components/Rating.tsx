import { useState } from "react"
import styles from "./Rating.module.css"

export function Rating() {

    const [selectedRating,setselectedRating] = useState<number>()
    const [isSubmited, setSubmited] = useState<boolean>()

    function handleRatingClicked(rating: number){
        setselectedRating(rating);
        
    }

    function handleFormSubmitted(e: React.FormEvent){
        e.preventDefault();
        setSubmited(true);
    }

    return isSubmited ? (
    <div className={styles['final-panel']} >
        <section className={styles.image}>
            <div className={styles.final}>{selectedRating}</div>
            <img src="/illustration-thank-you.svg"  />
        </section>
        <h1 className={styles.title}>Thank you!</h1>
        <p className={styles.selected}>
            You selected {selectedRating} out of 5
        </p>
        <p className={styles.description}>
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.       
        </p>

    </div> 
    ) : (
    <form onSubmit={handleFormSubmitted} className={styles.panel}>
        <img src="/icon-star.svg" className={styles.star} />
        
        <h1 className={styles.title}>How did we do?</h1>

        <p className={styles.description}>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!        
        </p>

        <div className={styles.group}>
            {[1,2,3,4,5].map((rating) => (
                < button
                    type="button"
                    onClick={() => handleRatingClicked(rating)}
                    className={styles.rating}
                >{rating}</button>    
            ))}
        </div>

        <button className={styles.submit} disabled={selectedRating === undefined}>
            Submit
        </button>

    </form>
    )
}