import styles from './Description.module.css';

export default function Description() {

    return (
        <div>
            <h1 className={styles.head}>Sip Happens Café</h1>
            <p className={styles.comment}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    )
}