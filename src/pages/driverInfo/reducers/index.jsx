import { handleActions } from "redux-actions";
import * as actions from "../actions/index";



const defaultState = {
  driverInfoData: {
    StandingsLists: [{
      DriverStandings: [{
        Constructors: [{
          constructorId: "",
          name: "",
          nationality: "",
          url: "",
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
        wins: "",
      }],
      round: "",
      season: "",
    }
    ],
    code: "",
    dateOfBirth: "",
    driverId: "",
    familyName: "",
    givenName: "",
    nationality: "",
    permanentNumber: "",
    url: ""
  },
  isLoading: false,
  errors: ""
}


export const getDriverInfoDataPageReducer = handleActions({

  [actions.GET_DRIVER_INFO_REQUEST.toString()]: (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null
    };
  },
  [actions.GET_DRIVER_INFO_SUCCESS.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      driverInfoData: payload.response
    }
  },
  [actions.GET_DRIVER_INFO_FAIL.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  }
}, defaultState)

