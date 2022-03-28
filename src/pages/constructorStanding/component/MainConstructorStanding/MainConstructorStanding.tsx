import React from 'react';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import { CarsIMG } from '../../../../constants/CarIMG';
import { TeamsLogoIMG } from '../../../../constants/TeamsLogoIMG';
import { ROUTES_NAMES } from '../../../../routes/RoutesName';
import { ConstructorStandingsType } from '../../../../types/ConstructorStandingTypes';
import "./MainConstructorStanding.scss";


type PropsType = {
    ConstructorStandings: ConstructorStandingsType[]
}

const MainConstructorStanding = (props: PropsType) => {
    return (
        <div className="container constructorStandingWrapper">
            <h2> Constructor </h2>
            <h1> STANDING 2022 </h1>
            <div className="mainConstructor__wrapper">
                {props.ConstructorStandings
                    .filter((e: ConstructorStandingsType, i: number) => i < 3)
                    .map((e: ConstructorStandingsType) => {
                        return (
                            <div key={e.position} className="card" >
                                <div className="logo__img">
                                    <h3 className="circle"> {e.position} </h3>
                                    <img src={`${TeamsLogoIMG[e.Constructor.constructorId]}`} alt="Team Logo" />
                                </div>
                                <div className="car__img">
                                    <img src={`${CarsIMG[e.Constructor.constructorId]}`} alt="Team Car" />
                                </div>
                                <div className="constructor__info">
                                    <h2>{e.Constructor.name}</h2>
                                    <h3>{e.points} PTS</h3>
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className="home__constructor__link">
                <CustomButton
                    route={ROUTES_NAMES.CONSTRUCTOR_STANDING}
                    name="View Full Standing" />
            </div>
        </div>
    );
};

export default MainConstructorStanding;