import './Feedback.module.css'

export default function Feedback({ feedback }) {
    return (
      <div className={styles.feedback}>
        <h2>Feedback</h2>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
      </div>
    );
  }