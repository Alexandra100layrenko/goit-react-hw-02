import s from './FeedBack.module.css'

export default function FeedBack ({feedBack, totalFeedBack, positiveFeedBack}) {
    return (
        <ul className={s.feedBack}>
            <li>Good: {feedBack.good}</li>
            <li>Neutral: {feedBack.neutral}</li>
            <li>Bad: {feedBack.bad}</li>
            <li>Total: {totalFeedBack}</li>
            <li>Positive: {positiveFeedBack}%</li>
        </ul>
    )
}