import { useState, useEffect } from 'react'
import s from'./App.module.css'
import Descriptions from '../Descriptions/Descriptions'
import FeedBack from '../FeedBack/FeedBack'
import Options from '../Options/Options'

export default function App() {

  return (
    <div className={s.wraper}>
      <h1>Description Component</h1>
      <Descriptions />
      <Options />
      <FeedBack />
    </div>
  )
}