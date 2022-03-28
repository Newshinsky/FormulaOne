import { DriverStandingsType } from "./DriverStandingTypes"






export type StandingsListsType = {
    DriverStandings: DriverStandingsType[]
    round: string
    season: string
}

export type DriverInfoDataType = {
    StandingsLists: StandingsListsType[]
    code: string
    dateOfBirth: string
    driverId: string
    familyName: string
    givenName: string
    nationality: string
    permanentNumber: string
    url: string
}

export type DriverInfoDefaultStateType = {
    driverInfoData: DriverInfoDataType,
    isLoading: boolean,
    errors: string;
}