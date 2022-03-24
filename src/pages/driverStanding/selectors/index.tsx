import { DriverStandingDefaultStateType } from "../../../types/DriverStandingTypes"



export const driverStandingDataSelector = (state: { driverStanding: DriverStandingDefaultStateType }) => state.driverStanding.driverStandingData
export const isLoadingSelector = (state: { driverStanding: DriverStandingDefaultStateType }) => state.driverStanding.isLoading


