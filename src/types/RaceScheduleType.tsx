
export type DateAndTimeType = {
    date: string,
    time: string
}

export type CircuitLocationType = {
    lat: string,
    long: string,
    locality: string,
    country: string,
}


export type CircuitType = {
    Location: CircuitLocationType
    circuitId: string,
    circuitName: string,
    url: string,
}
export type CountryInfoType = {
    alpha2: string
    alpha3: string
    countryCallingCodes: string[]
    currencies: string[]
    emoji: string
    ioc: string
    languages: string[]
    name: string
    status: string
}

export type RaceScheduleDataType = {
    Circuit: CircuitType
    CountryInfo: CountryInfoType
    FirstPractice: DateAndTimeType
    Qualifying: DateAndTimeType
    SecondPractice: DateAndTimeType
    ThirdPractice: DateAndTimeType
    date: string
    raceName: string
    round: string
    season: string
    time: string
    url: string
}

export type RaceScheduleDefaultStateType = {
    raceScheduleData: RaceScheduleDataType[],
    isLoading: boolean,
    errors: string;
}