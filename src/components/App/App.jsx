import { useState, useEffect } from 'react';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification'
import Description from '../Description/Description'
import styles from './App.module.css'

export default function App() {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  const resetClicks = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  }

  const positiveFeedback = () => {
    return totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  }

  return (
    <div className={styles.container}>
      <Description />
      <Options onFeedback={handleFeedback} totalFeedback={totalFeedback} onReset={resetClicks} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback()} />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}

