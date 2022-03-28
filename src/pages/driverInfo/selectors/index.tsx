import { DriverInfoDefaultStateType } from "../../../types/DriverItemInfoType"




export const DriverInfoSelector = (state: { driverInfo: DriverInfoDefaultStateType }) => state.driverInfo.driverInfoData
export const isLoadingSelector = (state: { driverInfo: DriverInfoDefaultStateType }) => state.driverInfo.isLoading

