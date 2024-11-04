import s from './FeedBack.module.css'

export default function FeedBack ({feedBack}) {
    return (
        <ul className={s.feedBack}>
            <li>Good: {feedBack.good}</li>
            <li>Neutral: {feedBack.neutral}</li>
            <li>Bad: {feedBack.bad}</li>
            <li>Total: {feedBack.good + feedBack.neutral + feedBack.bad}</li>
            <li>Positive: {feedBack.good > 0 ? ((feedBack.good / (feedBack.good + feedBack.neutral + feedBack.bad)) * 100).toFixed(2) + '%' : '0%'}</li>
        </ul>
    )
}