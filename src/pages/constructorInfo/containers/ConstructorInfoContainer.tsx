import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/loader/Loader';
import { GET_CONSTRUCTOR_INFO_REQUEST } from '../actions';
import ConstructorItemInfo from '../components/ConstructorItemInfo';
import { constructorInfoDataSelector, isLoadingSelector } from '../selectors';

const ConstructorInfoContainer = () => {


    const dispatch = useDispatch()
    const constructorInfoData = useSelector(constructorInfoDataSelector)
    const isLoading = useSelector(isLoadingSelector)
    const { constructorName } = useParams()

    console.log(constructorInfoData)

    useEffect(() => {
        dispatch(GET_CONSTRUCTOR_INFO_REQUEST(constructorName))
    }, [dispatch, constructorName])

    return (!isLoading ?
        <ConstructorItemInfo
            constructorInfoData={constructorInfoData}
        />
        : <Loader />
    );
};

export default ConstructorInfoContainer;