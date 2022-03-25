import React from 'react'
import f1car from "./../../../../img/F1_2021__0000.jpg27E6FB37-7FE1-40B0-988F-D56E4D3AED5EDefaultHQ.png"
import "./HomePage.scss"



import { RaceScheduleDataType } from '../../../../types/RaceScheduleType';

type PropsType = {
  RaceShedule: RaceScheduleDataType[]
}


const HomePage = (props: PropsType) => {
  return (
    <>
      <div className="container home__wrapper">
        <div className="home__text">
          <h1> New Season</h1>
          <h1> New Flags</h1>
          <p> AGE GROUP 20 TO 50 YEARS </p>
        </div>
        <div className="home__image">
          <img src={f1car} alt="F1car" />
        </div>
        <div className="home__swiper">
        </div>
      </div>
    </>
  )
}

export default HomePage

