import api from "../api/config";


export class RaceScheduleService {

    static instance = new RaceScheduleService()

    static async getRaceScheduleStanding() {

        return await api.get(`current.json`)
        
    }
}

export default RaceScheduleService.instance

