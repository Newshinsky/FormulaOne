import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loader from '../../../components/loader/Loader';
import { GET_CONSTRUCTOR_STANDING_REQUEST } from '../../constructorStanding/actions';
import { constructorStandingDataSelector } from '../../constructorStanding/selectors';
import { GET_DRIVER_STANDING_REQUEST } from '../../driverStanding/actions';
import { driverStandingDataSelector } from '../../driverStanding/selectors';
import { GET_RACE_SCHEDULE_REQUEST } from '../actions';
import HomePage from '../components/HomePage/HomePage';
import RaceScheduleSwiper from '../components/Swiper/RaceScheduleSwiper';
import { isLoadingSelector, raceScheduleDataSelector } from '../selectors';







const HomePageContainer = () => {


    const dispatch = useDispatch()
    const RaceShedule = useSelector(raceScheduleDataSelector)
    const isLoading = useSelector(isLoadingSelector)
    const { DriverStandings } = useSelector(driverStandingDataSelector)
    const { ConstructorStandings } = useSelector(constructorStandingDataSelector)

    useEffect(() => {
        dispatch(GET_DRIVER_STANDING_REQUEST())
        dispatch(GET_RACE_SCHEDULE_REQUEST())
        dispatch(GET_CONSTRUCTOR_STANDING_REQUEST())
    }, [dispatch])


    return (!isLoading ?
        <>
            <RaceScheduleSwiper RaceShedule={RaceShedule} />
            <HomePage
                RaceShedule={RaceShedule}
                DriverStandings={DriverStandings}
                ConstructorStandings={ConstructorStandings}
            />
        </>
        : <Loader />
    )
}

export default HomePageContainer