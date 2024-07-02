import './Options.module.css'

export default function Options({ onFeedback }) {
  return (
    <div className={styles.options}>
      <h2>Give your feedback</h2>
      <button onClick={() => onFeedback('good')}>Good</button>
      <button onClick={() => onFeedback('neutral')}>Neutral</button>
      <button onClick={() => onFeedback('bad')}>Bad</button>
    </div>
  );
}