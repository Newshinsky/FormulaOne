import { handleActions } from "redux-actions";
import { FIRST_ELEMENT_IN_ARRAY } from "../../../constants";
import SwapElemInArray from "../../../utils/SwapArray";

import * as actions from "../actions/index";



const defaultState = {
  driverStandingData: {
    round: "",
    DriverStandings: [{
      Constructors: [
        {
          constructorId: "",
          name: "",
          nationality: "",
          url: ""
        }],
      Driver: {
        code: "",
        dateOfBirth: "",
        driverId: "",
        familyName: "",
        givenName: "",
        nationality: "",
        permanentNumber: "",
        url: ""
      },
      points: "",
      position: "",
      positionText: "",
      wins: ""
    }],
    season: ""
  },
  isLoading: false,
  errors: ""
}


export const getDriverStandingDataPageReducer = handleActions({

  [actions.GET_DRIVER_STANDING_REQUEST.toString()]: (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null
    };
  },
  [actions.GET_DRIVER_STANDING_SUCCESS.toString()]: (state, { payload }) => {

    let copyDriverStandingData = JSON.parse(JSON.stringify(payload.response.MRData.StandingsTable.StandingsLists[FIRST_ELEMENT_IN_ARRAY]))
    SwapElemInArray(copyDriverStandingData.DriverStandings, 0, 1)

    return {
      ...state,
      isLoading: false,
      driverStandingData: copyDriverStandingData
    }
  },
  [actions.GET_DRIVER_STANDING_FAIL.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  }
}, defaultState)

