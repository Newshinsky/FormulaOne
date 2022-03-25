import React from 'react'
import { RaceScheduleDataType } from '../../../../types/RaceScheduleType'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";

import "./RaceScheduleSwiper.scss"
import "swiper/css/bundle";
import { monthNames } from '../../../../constants/MonthNames';
import { FlagIMG } from '../../../../constants/FlagIMG';

type PropsType = {
    RaceShedule: RaceScheduleDataType[]
}


const RaceScheduleSwiper = (props: PropsType) => {

    return (

        <div className="container">
            <Swiper
                spaceBetween={35}
                slidesPerView={4}
                centeredSlides={true}
                grabCursor={true}
                rewind={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        spaceBetween: 5,
                        slidesPerView: 6
                    },
                    768: {
                        spaceBetween: 10,
                        slidesPerView: 6
                    },
                    1024: {
                        spaceBetween: 20,
                        slidesPerView: 6
                    },
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {props.RaceShedule.map((e: RaceScheduleDataType) => {
                    return (
                        <SwiperSlide>
                            <div> <img
                                src={!e.CountryInfo?.alpha2
                                    ? FlagIMG[e.Circuit.Location.country]
                                    : `https://flagcdn.com/w640/${e.CountryInfo?.alpha2.toLocaleLowerCase()}.png`}
                                width="160"
                                alt={e.Circuit.Location.country}></img> </div>
                            <div className="race__info">
                                <h3>{e.raceName} </h3>
                                <h1>{new Date(e.date).getDate()} </h1>
                                <h3>{monthNames[new Date(e.date).getMonth()]} </h3>
                            </div>
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>
        </div>
    )
}

export default RaceScheduleSwiper