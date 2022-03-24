import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/loader/Loader'
import { GET_CONSTRUCTOR_STANDING_REQUEST } from '../actions'
import ConstructorStanding from '../component/ConstructorStanding'
import { constructorStandingDataSelector, isLoadingSelector } from '../selectors'



const ConstructorStandingContainer = () => {




    const dispatch = useDispatch()
    const { ConstructorStandings } = useSelector(constructorStandingDataSelector)
    const isLoading = useSelector(isLoadingSelector)




    console.log(ConstructorStandings)

    useEffect(() => {
        dispatch(GET_CONSTRUCTOR_STANDING_REQUEST())
    }, [dispatch])



    return (!isLoading
        ? <ConstructorStanding
            ConstructorStandings={ConstructorStandings} />
        : <Loader />)





}

export default ConstructorStandingContainer