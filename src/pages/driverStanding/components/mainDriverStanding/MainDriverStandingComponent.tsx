import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { FIRST_ELEMENT_IN_ARRAY } from '../../../../constants'
import { DriverIMG } from '../../../../constants/DriversIMG'
import { TeamsLogoIMG } from '../../../../constants/TeamsLogoIMG'
import { ROUTES_NAMES } from '../../../../routes/RoutesName'
import { DriverStandingsType } from '../../../../types/DriverStandingTypes'


import "./MainDriverStanding.scss"

type PropsType = {
    DriverStandings: DriverStandingsType[]
}

const MainDriverStandingComponent = memo((props: PropsType) => {
    return (
        <div className="container driverStandingWrapper">
            <h2> Driver </h2>
            <h1> STANDING 2022 </h1>
            <div className="mainDrivers__wrapper">
                {props.DriverStandings
                    .filter((e: DriverStandingsType, i: number) => i < 3)
                    .map((e: DriverStandingsType) => {
                        return (
                            <div key={e.Driver.code} className="card" >
                                <div className="card__img">
                                    <h3 className="circle"> {e.position} </h3>
                                    <Link to={`${ROUTES_NAMES.DRIVER_STANDING}/${e.Driver.driverId}`} >
                                        <img src={`${DriverIMG[e.Driver.code]}`} alt="Driver" />
                                    </Link>
                                </div>
                                <div className="card__info">
                                    <h3>{e.points} PTS</h3>
                                    <h2>{e.Driver.givenName.toLocaleUpperCase()}</h2>
                                    <h1>{e.Driver.familyName.toLocaleUpperCase()}</h1>
                                    <img src={`${TeamsLogoIMG[e.Constructors[FIRST_ELEMENT_IN_ARRAY].constructorId]}`} alt="Team Logo" />
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div >
    )
})

export default MainDriverStandingComponent