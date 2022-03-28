import { combineReducers } from "redux";
import { getConstructorStandingDataPageReducer } from "../pages/constructorStanding/reducers";
import { getDriverInfoDataPageReducer } from "../pages/driverInfo/reducers";
import { getDriverStandingDataPageReducer } from "../pages/driverStanding/reducers";
import { getRaceScheduleDataDataPageReducer } from "../pages/homePage/reducers";




export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
     driverStanding: getDriverStandingDataPageReducer,
     constructorStanding: getConstructorStandingDataPageReducer,
     raceSchedule: getRaceScheduleDataDataPageReducer,
     driverInfo: getDriverInfoDataPageReducer
})



export default rootReducer