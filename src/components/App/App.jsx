import React, { useState } from 'react';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import styles from './App.module.css'

export default function App() {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <div className={styles.container}>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options onFeedback={handleFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

