import React from 'react'
import { DriverStandingsType } from '../../../../types/DriverStandingTypes'

import MainDriverStandingComponent from '../mainDriverStanding/MainDriverStandingComponent'
import RestDriverStanding from '../restDriverStanding/RestDriverStanding'

type PropsType = {
    DriverStandings: DriverStandingsType[]
}


const DriverStandingLayout = (props: PropsType) => {
    return (
        <>
            <MainDriverStandingComponent
                DriverStandings={props.DriverStandings}
            />
            <RestDriverStanding
                DriverStandings={props.DriverStandings} />
        </>
    )
}

export default DriverStandingLayout