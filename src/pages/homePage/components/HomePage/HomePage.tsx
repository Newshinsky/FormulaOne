import React, { memo } from 'react';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import { ROUTES_NAMES } from '../../../../routes/RoutesName';
import { ConstructorStandingsType } from '../../../../types/ConstructorStandingTypes';
import { DriverStandingsType } from '../../../../types/DriverStandingTypes';
import { RaceScheduleDataType } from '../../../../types/RaceScheduleType';
import MainConstructorStanding from '../../../constructorStanding/component/MainConstructorStanding/MainConstructorStanding';
import MainDriverStandingComponent from '../../../driverStanding/components/mainDriverStanding/MainDriverStandingComponent';
import "./HomePage.scss";




type PropsType = {
  RaceShedule: RaceScheduleDataType[]
  DriverStandings: DriverStandingsType[]
  ConstructorStandings: ConstructorStandingsType[]
}




const HomePage = memo((props: PropsType) => {
  return (
    <>
      <div className="container home__wrapper">
        <MainDriverStandingComponent DriverStandings={props.DriverStandings} />
        <div className="home__driver__link">
          <CustomButton
            route={ROUTES_NAMES.DRIVER_STANDING}
            name="View Full Standing" />
        </div>
        <MainConstructorStanding ConstructorStandings={props.ConstructorStandings} />
        
      </div>
    </>
  )
})

export default HomePage

