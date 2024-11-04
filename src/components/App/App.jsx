import { useState, useEffect } from 'react'
import s from './App.module.css'
import Description from '../Description/Description'
import FeedBack from '../FeedBack/FeedBack'
import Options from '../Options/Options'
import Notification from '../Notification/Notification'


export default function App() {
  const [feedBack, setFeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  useEffect(() => {
    const savedFeedBack = JSON.parse(localStorage.getItem('feedBack'));
    if (savedFeedBack) {
      setFeedBack(savedFeedBack);
    }
  }, []);

  useEffect(() =>{
    localStorage.setItem('feedBack', JSON.stringify(feedBack));
  }, [feedBack]);

  const handleClickByOption = value => {
    setFeedBack(prev => ({
      ...prev,
      [value] : prev[value] + 1,
    }));
  };

  const totalFeedBack = feedBack.good + feedBack.neutral + feedBack.bad;

  const resetClicks = () => {
    setFeedBack({ good: 0, neutral: 0, bad: 0 });
  }

  const positiveFeedBack = () => {
    return totalFeedBack > 0 ? Math.round((feedBack.good / totalFeedBack) * 100) : 0;
  }

  return (
    <div className={s.wraper}>
      <Description />
      <Options onOptionClick={handleClickByOption} options={Object.keys(feedBack)} onReset={resetClicks} totalFeedBack={totalFeedBack} />
      {totalFeedBack > 0 ? (
        <FeedBack feedBack={feedBack} totalFeedBack={totalFeedBack} positiveFeedBack={positiveFeedBack()} />
        ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}