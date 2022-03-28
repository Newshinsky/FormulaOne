import { RaceScheduleDefaultStateType } from "../../../types/RaceScheduleType";



export const raceScheduleDataSelector = (state: { raceSchedule: RaceScheduleDefaultStateType }) => state.raceSchedule.raceScheduleData
export const isLoadingSelector = (state: { driverStanding: RaceScheduleDefaultStateType }) => state.driverStanding.isLoading


