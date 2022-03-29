import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { CarsIMG } from '../../../../constants/CarIMG'
import { TeamColor } from '../../../../constants/teamColor'
import { ROUTES_NAMES } from '../../../../routes/RoutesName'
import { ConstructorStandingsType } from '../../../../types/ConstructorStandingTypes'
import "./ConstructorStanding.scss"



type PropsType = {
    ConstructorStandings: ConstructorStandingsType[]
}

const ConstructorStanding = memo((props: PropsType) => {
    return (
        <div className="container constructor__wrapper">
            <h2> Constructor </h2>
            <h1> STANDING 2022 </h1>
            <div className="constructor_info">
                {props.ConstructorStandings.map((e: ConstructorStandingsType) => {
                    return (
                        <div key={e.Constructor.constructorId} className="card__wrapper">
                            <Link to={`${ROUTES_NAMES.CONSTRUCTOR_STANDING}/${e.Constructor.constructorId}`} >
                                <div className="upper__card__info">
                                    <h1 style={{ color: TeamColor[e.Constructor.constructorId] }}> {e.points} </h1>
                                    <img src={CarsIMG[e.Constructor.constructorId]} alt="car" />
                                    <h4 style={{ color: TeamColor[e.Constructor.constructorId] }}>pts</h4>
                                    <h2> {e.Constructor.name}</h2>
                                </div>
                                <div className="lower__card__info">
                                    <h3> Pos. {e.position}</h3>
                                    <h4> Wins : {e.wins}</h4>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )//
})

export default ConstructorStanding