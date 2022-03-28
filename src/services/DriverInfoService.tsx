import api from "../api/config";
import { FIRST_ELEMENT_IN_ARRAY } from "../constants";


export class DriverinfoService {

    static instance = new DriverinfoService()

    static async getDriverInfo(name: string) {

        const driverFetch = await api.get(`drivers/${name}.json`)

        let { code, dateOfBirth, driverId, familyName, givenName, nationality, permanentNumber, url } = driverFetch.data.MRData.DriverTable.Drivers[FIRST_ELEMENT_IN_ARRAY]

        let driverStandingFetch = await api.get(`drivers/${name}/driverStandings.json`)

        let { StandingsLists } = driverStandingFetch.data.MRData.StandingsTable

        let resultData = { data: { code, dateOfBirth, driverId, familyName, givenName, nationality, permanentNumber, url, StandingsLists } }

        return resultData
    }
}

export default DriverinfoService.instance
