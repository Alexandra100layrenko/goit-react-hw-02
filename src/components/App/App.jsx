import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import s from'./App.module.css'
import Descriptions from '../Descriptions/Descriptions'
import FeedBack from '../Options/Options'
import Options from '../FeedBack/FeedBack/'

export default function App() {
  const [widget, setWidget] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const hendleClickByOptin = (value) =>{
    setWidget(prev => ({
      ...prev,
      [value] : prev[value] + 1,
    }))
  }

  return (
    <div className={s.wraper}>
      <Descriptions />
      <Options />
      <FeedBack />
    </div>
  )
}