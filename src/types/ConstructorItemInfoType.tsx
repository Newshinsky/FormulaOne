import { ConstructorsInfoType } from "./DriverStandingTypes"


export type StatusItemType = {
    count: string
    status: string
    statusId: string
}

export type ConstructorStatusType = {
    Status: StatusItemType[]
    constructorId: string
}

export type ConstructorInfoDataType = {
    constructorChamp: string
    constructorName: ConstructorsInfoType
    constructorStatus: ConstructorStatusType
    raceWins: string
}

export type DriverInfoDefaultStateType = {
    constructorInfoData: ConstructorInfoDataType,
    isLoading: false,
    errors: ""
}