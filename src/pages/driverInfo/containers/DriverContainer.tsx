import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GET_DRIVER_INFO_REQUEST } from '../actions'
import MainDriverInfo from '../components/MainDriverInfo/MainDriverInfo'
import { DriverInfoSelector } from '../selectors'

const DriverContainer = () => {

    const dispatch = useDispatch()
    const { StandingsLists, code, dateOfBirth, driverId, familyName, givenName, nationality, permanentNumber, url, } = useSelector(DriverInfoSelector)
    const { driverName } = useParams()

    console.log(StandingsLists)

    useEffect(() => {
        dispatch(GET_DRIVER_INFO_REQUEST(driverName))
    }, [dispatch, driverName])

    return (
        <div>
            <MainDriverInfo
                dateOfBirth={dateOfBirth}
                familyName={familyName}
                givenName={givenName}
                nationality={nationality}
                permanentNumber={permanentNumber}
                StandingsLists={StandingsLists}
                code={code}
            />
        </div>
    )
}

export default DriverContainer


