import * as driverStandingActions from "./../pages/driverStanding/actions/index"
import * as constructorStandingActions from "./../pages/constructorStanding//actions/index"

import { StandingService } from "../services/StandingService.tsx";

const apiCallMapping = (action) => {
  const actionCallMap = {
    [driverStandingActions.GET_DRIVER_STANDING_REQUEST]: StandingService.getDriverStanding,
    [constructorStandingActions.GET_CONSTRUCTOR_STANDING_REQUEST]: StandingService.getConstructorStanding,
  }


  if (!actionCallMap[action.type]) {
    throw new Error("Not Mapped Action");
  }
  return actionCallMap[action.type]
}

export default apiCallMapping