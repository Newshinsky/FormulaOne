import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/loader/Loader'
import { FIRST_ELEMENT_IN_ARRAY } from '../../../constants'
import { StandingsListsType } from '../../../types/DriverItemInfoType'
import { GET_DRIVER_INFO_REQUEST } from '../actions'
import MainDriverInfo from '../components/MainDriverInfo/MainDriverInfo'
import { DriverInfoSelector, isLoadingSelector } from '../selectors'

const DriverContainer = () => {

    const dispatch = useDispatch()
    let [champ, setChamp] = useState(0)
    let [highestPos, setHighestPos] = useState(0)
    let [wins, setWins] = useState(0)

    const { StandingsLists, code, dateOfBirth, driverId, familyName, givenName, nationality, permanentNumber, url, } = useSelector(DriverInfoSelector)
    const isLoading = useSelector(isLoadingSelector)
    const { driverName } = useParams()

    let countChamp = useCallback((array: StandingsListsType[]) => {
        let count = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i].DriverStandings[FIRST_ELEMENT_IN_ARRAY].position === "1") {
                count++
            }
        }
        return setChamp(count)
    }, [])

    let findHighestPos = useCallback((array: StandingsListsType[]) => {
        let count = +array[0].DriverStandings[FIRST_ELEMENT_IN_ARRAY].position
        for (let i = 0; i < array.length; i++) {
            if (+array[i].DriverStandings[FIRST_ELEMENT_IN_ARRAY].position <= count) {
                count = +array[i].DriverStandings[FIRST_ELEMENT_IN_ARRAY].position
            }
        }
        return setHighestPos(count)
    }, [])
    let countWins = useCallback((array: StandingsListsType[]) => {
        let count = 0
        for (let i = 0; i < array.length; i++) {
            if (+array[i].DriverStandings[FIRST_ELEMENT_IN_ARRAY].wins > 0) {
                count += +array[i].DriverStandings[FIRST_ELEMENT_IN_ARRAY].wins
            }
        }
        return setWins(count)
    }, [])
    useEffect(() => {
        dispatch(GET_DRIVER_INFO_REQUEST(driverName))
    }, [dispatch, driverName])

    useEffect(() => {
        countChamp(StandingsLists)
    }, [StandingsLists, countChamp])

    useEffect(() => {
        findHighestPos(StandingsLists)
    }, [StandingsLists, findHighestPos])
    useEffect(() => {
        countWins(StandingsLists)
    }, [StandingsLists, countWins])

    return (!isLoading ?
        <div>
            <MainDriverInfo
                dateOfBirth={dateOfBirth}
                familyName={familyName}
                givenName={givenName}
                nationality={nationality}
                permanentNumber={permanentNumber}
                StandingsLists={StandingsLists}
                code={code}
                champ={champ}
                highestPos={highestPos}
                wins={wins}
                url={url}
            />
        </div>
        : <Loader />
    )
}



export default DriverContainer


