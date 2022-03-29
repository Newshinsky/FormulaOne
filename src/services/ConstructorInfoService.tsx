import api from "../api/config";
import { FIRST_ELEMENT_IN_ARRAY } from "../constants";


export class ConstructorInfonfoService {

    static instance = new ConstructorInfonfoService()

    static async getConstructorInfo(name: string) {

        const constructorChampFetch = api.get(`constructors/${name}/constructorStandings/1/seasons.json`)
        const raceWinsFetch = api.get(`/constructors/${name}/results/1.json`)
        const constructorStatusFetch = api.get(`constructors/${name}/status.json`)
        const constructorNameFetch = api.get(`constructors/${name}.json`)

        let [constructorChamp, raceWins, constructorStatus, constructorName] = await Promise.all([
            constructorChampFetch,
            raceWinsFetch,
            constructorStatusFetch,
            constructorNameFetch
        ])

        constructorChamp = constructorChamp.data.MRData.total
        raceWins = raceWins.data.MRData.total
        constructorStatus = constructorStatus.data.MRData.StatusTable
        constructorName = constructorName.data.MRData.ConstructorTable.Constructors[FIRST_ELEMENT_IN_ARRAY]

        let resultData = { data: { constructorChamp, raceWins, constructorStatus, constructorName } }

        return resultData
    }
}

export default ConstructorInfonfoService.instance
