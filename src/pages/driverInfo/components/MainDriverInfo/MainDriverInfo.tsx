import React, { memo } from 'react'
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
    champ: number
    highestPos: number
    wins: number
    url: string
}

const MainDriverInfo = memo((props: PropsType) => {

    return (
        <div className="container driverInfo__wrapper">
            <div className="driver__image">
                <img src={`${DriverIMG[props.code]}`} alt="Team Car" />
                <h1> {props.givenName.toLocaleUpperCase()} {props.familyName.toUpperCase()}</h1>
                <h1>#{props.permanentNumber}</h1>
                <a href={props.url} target="_blank" rel="noreferrer"> More information </a>
            </div>
            <div className="driver__info">
                <h2>DATE OF BIRTH: {props.dateOfBirth}</h2>
                <h2>NATIONALITY: {props.nationality.toLocaleUpperCase()}</h2>
                <h2>CHAMPIONSHIP: {props.champ} </h2>
                <h2> HIGHEST POSITION: {props.highestPos}</h2>
                <h2>WINS: {props.wins}</h2>
            </div>
        </div>
    )
})

export default MainDriverInfo