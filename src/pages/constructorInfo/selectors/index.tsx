import { DriverInfoDefaultStateType } from "../../../types/ConstructorItemInfoType"



export const constructorInfoDataSelector = (state: { constructorInfo: DriverInfoDefaultStateType }) => state.constructorInfo.constructorInfoData
export const isLoadingSelector = (state: { constructorInfo: DriverInfoDefaultStateType }) => state.constructorInfo.isLoading



