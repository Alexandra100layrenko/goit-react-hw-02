import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import './App.module.css'

export default function App() {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  return (
    <div className={styles.app}>
      <Options onFeedback={handleFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

