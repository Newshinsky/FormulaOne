import React from 'react'
import { FIRST_ELEMENT_IN_ARRAY } from '../../../constants'
import { BG_IMG } from '../../../constants/BG_IMG'
import { CarsIMG } from '../../../constants/CarIMG'
import { TeamColor } from '../../../constants/teamColor'
import { TeamsLogoIMG } from '../../../constants/TeamsLogoIMG'
import { ConstructorInfoDataType } from '../../../types/ConstructorItemInfoType'
import "./ConstructorItemInfo.scss"


type PropsType = {
    constructorInfoData: ConstructorInfoDataType
}

const ConstructorItemInfo = (props: PropsType) => {
    return (
        <div className="container constructorInfo__wrapper ">
            <div
                style={{
                    backgroundImage: `url(${BG_IMG[props.constructorInfoData.constructorName.constructorId]})`,
                }}
                className="constructorInfo__bg">
            </div>
            <div className="constructorInfo">
                <div className="constructorInfo__logo">
                    <img src={TeamsLogoIMG[props.constructorInfoData.constructorName.constructorId]} alt="" />
                </div>
                <div className="constructorInfo__text">
                    <h1 style={{
                        color: `${TeamColor[props.constructorInfoData.constructorName.constructorId]}`,
                    }}> {props.constructorInfoData.constructorName.name.toLocaleUpperCase()}</h1>
                    <h2>NATIONALITY: {props.constructorInfoData.constructorName.nationality.toLocaleUpperCase()}</h2>
                    <h2>CHAMPIONSHIP: {props.constructorInfoData.constructorChamp}</h2>
                    <h2>RACES WON: {props.constructorInfoData.raceWins}</h2>
                    <h2>RACES: {props.constructorInfoData.constructorStatus.Status[FIRST_ELEMENT_IN_ARRAY].count}</h2>
                    <img src={CarsIMG[props.constructorInfoData.constructorName.constructorId]} alt="" />
                </div>
            </div>

        </div>)
}

export default ConstructorItemInfo