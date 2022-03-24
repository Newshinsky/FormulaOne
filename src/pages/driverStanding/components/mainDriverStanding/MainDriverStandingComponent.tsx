import React from 'react'
import { FIRST_ELEMENT_IN_ARRAY } from '../../../../constants'
import { DriverIMG } from '../../../../constants/DriversIMG'
import { DriverStandingsType } from '../../../../types/DriverStandingTypes'


import "./MainDriverStanding.scss"

type PropsType = {
    DriverStandings: DriverStandingsType[]
}

const MainDriverStandingComponent = (props: PropsType) => {
    return (
        <div className="container driverStandingWrapper">
            <h1> Driver Standing 2022 </h1>
            <div className="mainDrivers__Wrapper">
                {props.DriverStandings
                    .filter((e: DriverStandingsType, i: number) => i < 3)
                    .map((e: DriverStandingsType) => {
                        return (
                            <div className="card" key={e.Driver.code}>
                                <div className="card__img">
                                    <img src={`${DriverIMG[e.Driver.code]}`} alt="Driver" />
                                </div>
                                <div className="card__info">
                                    <div className="card__name">
                                        <h1> {e.Driver.givenName} </h1>
                                        <h1>{e.Driver.familyName} </h1>
                                        <h2>#{e.Driver.permanentNumber}</h2>
                                        <h3>({e.Constructors[FIRST_ELEMENT_IN_ARRAY].name})</h3>
                                    </div>
                                    <div className="card__points">
                                        <h1 >{e.points}</h1>
                                        <h2>points</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default MainDriverStandingComponent