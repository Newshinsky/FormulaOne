import { combineReducers } from "redux";
import { getConstructorStandingDataPageReducer } from "../pages/constructorStanding/reducers";
import { getDriverStandingDataPageReducer } from "../pages/driverStanding/reducers";




export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
     driverStanding: getDriverStandingDataPageReducer,
     constructorStanding: getConstructorStandingDataPageReducer,
})



export default rootReducer