import { handleActions } from "redux-actions";
import * as actions from "../actions/index";
import { FIRST_ELEMENT_IN_ARRAY } from "./../../../constants/index"



const defaultState = {
  constructorStandingData: {
    round: "",
    season: "",
    ConstructorStandings: [{
      Constructor: {
        constructorId: '',
        url: '',
        name: '',
        nationality: ''
      },
      points: "",
      position: "",
      positionText: "",
      wins: "",
    }]
  },
  isLoading: false,
  errors: ""
}


export const getConstructorStandingDataPageReducer = handleActions({

  [actions.GET_CONSTRUCTOR_STANDING_REQUEST.toString()]: (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null
    };
  },
  [actions.GET_CONSTRUCTOR_STANDING_SUCCESS.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      constructorStandingData: payload.response.MRData.StandingsTable.StandingsLists[FIRST_ELEMENT_IN_ARRAY]
    }
  },
  [actions.GET_CONSTRUCTOR_STANDING_FAIL.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  }
}, defaultState)

