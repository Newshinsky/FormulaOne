import React from 'react'
import { FIRST_ELEMENT_IN_ARRAY } from '../../../../constants'
import { DriverIMG } from '../../../../constants/DriversIMG'
import { StandingsListsType } from '../../../../types/DriverItemInfoType'

import "./MainDriverInfo.scss"

type PropsType = {
    code: string
    dateOfBirth: string
    familyName: string
    givenName: string
    nationality: string
    permanentNumber: string
    StandingsLists: StandingsListsType[]
}

const MainDriverInfo = (props: PropsType) => {
    return (
        <div className="container driverInfoResult__wrapper">
            <div className="driver__info">
                <div className="driver__img">
                    <img src={`${DriverIMG[props.code]}`} alt="Driver" />
                </div>
                <div className="driver__text">
                    <h1>{props.givenName.toUpperCase()} {props.familyName.toUpperCase()}</h1>
                    <h1>DOB: {props.dateOfBirth}</h1>
                    <h1>NATIONALITY: {props.nationality.toUpperCase()}</h1>
                    <h1>NUMBER: {props.permanentNumber} </h1>
                </div>
            </div>
            <div className="driver__result">
                {props.StandingsLists.map((e: StandingsListsType) => {
                    return (
                        <div className="main__result">
                            <div className="result__year">
                                <h1> YEAR: {e.season} </h1>
                            </div>
                            <div className="driver__result__info">
                                <h2> TEAMS: {e.DriverStandings[FIRST_ELEMENT_IN_ARRAY].Constructors[FIRST_ELEMENT_IN_ARRAY].name} </h2>
                                <h2> POINTS: {e.DriverStandings[FIRST_ELEMENT_IN_ARRAY].points} </h2>
                                <h2> POSITION: {e.DriverStandings[FIRST_ELEMENT_IN_ARRAY].position} </h2>
                                <h2> WINS: {e.DriverStandings[FIRST_ELEMENT_IN_ARRAY].wins} </h2>
                            </div>
                        </div>
                    )
                })}


            </div>

        </div>
    )
}

export default MainDriverInfo