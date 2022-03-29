import { combineReducers } from "redux";
import { getConstructorInfoDataPageReducer } from "../pages/constructorInfo/reducers";
import { getConstructorStandingDataPageReducer } from "../pages/constructorStanding/reducers";
import { getDriverInfoDataPageReducer } from "../pages/driverInfo/reducers";
import { getDriverStandingDataPageReducer } from "../pages/driverStanding/reducers";
import { getRaceScheduleDataPageReducer } from "../pages/homePage/reducers";




export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
     driverStanding: getDriverStandingDataPageReducer,
     constructorStanding: getConstructorStandingDataPageReducer,
     raceSchedule: getRaceScheduleDataPageReducer,
     driverInfo: getDriverInfoDataPageReducer,
     constructorInfo: getConstructorInfoDataPageReducer
})



export default rootReducer