import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/loader/Loader'
import { GET_DRIVER_STANDING_REQUEST } from '../actions'
import DriverStandingLayout from '../components/driverStandingLayout/DriverStandingLayout'
import { driverStandingDataSelector, isLoadingSelector } from '../selectors'


const DriverStandingContainer = () => {




    const dispatch = useDispatch()
    const { DriverStandings } = useSelector(driverStandingDataSelector)
    const isLoading = useSelector(isLoadingSelector)




    useEffect(() => {
        dispatch(GET_DRIVER_STANDING_REQUEST())
    }, [dispatch])



    return (!isLoading
        ? <DriverStandingLayout
            DriverStandings={DriverStandings}
        />
        : <Loader />)





}

export default DriverStandingContainer