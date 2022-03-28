import * as driverStandingActions from "./../pages/driverStanding/actions/index"
import * as constructorStandingActions from "./../pages/constructorStanding//actions/index"
import * as raceScheduleActions from "./../pages/homePage/actions/index"
import * as driverInfoActions from "./../pages/driverInfo/actions/index"

import { StandingService } from "../services/StandingService.tsx";
import { RaceScheduleService } from "../services/RaceScheduleService.tsx";
import { DriverinfoService } from "../services/DriverInfoService";

const apiCallMapping = (action) => {
  const actionCallMap = {
    [driverStandingActions.GET_DRIVER_STANDING_REQUEST]: StandingService.getDriverStanding,
    [constructorStandingActions.GET_CONSTRUCTOR_STANDING_REQUEST]: StandingService.getConstructorStanding,

    [raceScheduleActions.GET_RACE_SCHEDULE_REQUEST]: RaceScheduleService.getRaceScheduleStanding,

    [driverInfoActions.GET_DRIVER_INFO_REQUEST]: DriverinfoService.getDriverInfo,
  }


  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[action.type]
}

export default apiCallMapping