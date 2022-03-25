import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GET_RACE_SCHEDULE_REQUEST } from '../actions';
import HomePage from '../components/HomePage/HomePage';
import RaceScheduleSwiper from '../components/Swiper/RaceScheduleSwiper';
import { raceScheduleDataSelector } from '../selectors';







const HomePageContainer = () => {


    const dispatch = useDispatch()
    const RaceShedule = useSelector(raceScheduleDataSelector)

    console.log(RaceShedule)
    useEffect(() => {
        dispatch(GET_RACE_SCHEDULE_REQUEST())
    }, [dispatch])
    return (
        <>
            <RaceScheduleSwiper RaceShedule={RaceShedule} />
            <HomePage RaceShedule={RaceShedule} />

        </>
    )
}

export default HomePageContainer