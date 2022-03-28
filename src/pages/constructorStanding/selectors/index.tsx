import { ConstructorStandingDefaultStateType } from "../../../types/ConstructorStandingTypes"




export const constructorStandingDataSelector = (state: { constructorStanding: ConstructorStandingDefaultStateType }) => state.constructorStanding.constructorStandingData
export const isLoadingSelector = (state: { constructorStanding: ConstructorStandingDefaultStateType }) => state.constructorStanding.isLoading

