import React, { memo } from 'react'
import { DriverStandingsType } from '../../../../types/DriverStandingTypes'

import MainDriverStandingComponent from '../mainDriverStanding/MainDriverStandingComponent'
import RestDriverStanding from '../restDriverStanding/RestDriverStanding'

type PropsType = {
    DriverStandings: DriverStandingsType[]
}


const DriverStandingLayout = memo((props: PropsType) => {
    return (
        <>
            <MainDriverStandingComponent
                DriverStandings={props.DriverStandings}
            />
            <RestDriverStanding
                DriverStandings={props.DriverStandings} />
        </>
    )
})

export default DriverStandingLayout