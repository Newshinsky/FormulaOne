import api from "../api/config";


export class StandingService {

    static instance = new StandingService()

    static async getDriverStanding() {
        return await api.get(`current/driverStandings.json`)
    }
    static async getConstructorStanding() {
        return await api.get(`current/constructorStandings.json`)
    }

}

export default StandingService.instance

