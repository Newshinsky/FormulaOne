




export type ConstructorsInfoType = {
    constructorId: string
    name: string
    nationality: string
    url: string
}

export type DriverInfoType = {
    code: string
    dateOfBirth: string
    driverId: string
    familyName: string
    givenName: string
    nationality: string
    permanentNumber: string
    url: string
}

export type DriverStandingsType = {
    Constructors: ConstructorsInfoType[]
    Driver: DriverInfoType
    points: string
    position: string
    positionText: string
    wins: string
}

export type DriverStandingDataType = {
    round: string,
    season: string,
    DriverStandings: DriverStandingsType[]
}

export type DriverStandingDefaultStateType = {
    driverStandingData: DriverStandingDataType,
    isLoading: boolean,
    errors: string;
}