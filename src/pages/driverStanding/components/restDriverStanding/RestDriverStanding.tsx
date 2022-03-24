import React from 'react'
import { FIRST_ELEMENT_IN_ARRAY } from '../../../../constants'
import { DriverIMG } from '../../../../constants/DriversIMG'
import { TeamColor } from '../../../../constants/teamColor'
import { DriverStandingsType } from '../../../../types/DriverStandingTypes'

import "./RestDriverStanding.scss"


type PropsType = {
    DriverStandings: DriverStandingsType[]
}

const RestDriverStanding = (props: PropsType) => {
    return (
        <div className="table__wrapper">
            <h1> Drivers </h1>
            {props.DriverStandings
                .filter((e: DriverStandingsType, i: number) => i >= 3)
                .map((e: DriverStandingsType) => {
                    return (
                        <div key={e.Driver.code} className="restDriverInfo">
                            <div className="teamInfo">
                                <h3>{e.position} </h3>
                                <div className="teamColor" style={{ backgroundColor: TeamColor[e.Constructors[FIRST_ELEMENT_IN_ARRAY].constructorId] }}> </div>
                                <h3> {e.Driver.givenName}  {e.Driver.familyName}  </h3>
                                <h5> {e.Constructors[FIRST_ELEMENT_IN_ARRAY].name}  </h5>
                            </div>
                            <div className="pointsInfo">
                                <img src={`${DriverIMG[e.Driver.code]}`} alt="car" />
                                <h3 className="points"> {e.points} points </h3>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}
export default RestDriverStanding