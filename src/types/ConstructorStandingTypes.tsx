import { ConstructorsInfoType } from "./DriverStandingTypes"

export type ConstructorStandingsType = {
    Constructor: ConstructorsInfoType
    points: string
    position: string
    positionText: string
    wins: string
}

export type ConstructorStandingDataType = {
    round: string,
    season: string,
    ConstructorStandings: ConstructorStandingsType[]
}

export type ConstructorStandingDefaultStateType = {
    constructorStandingData: ConstructorStandingDataType,
    isLoading: boolean,
    errors: string;
}