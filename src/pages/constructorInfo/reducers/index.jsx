import { handleActions } from "redux-actions";
import * as actions from "../actions/index";


const defaultState = {
  constructorInfoData: {
    constructorChamp: "",
    constructorName: {
      constructorId: "",
      name: "",
      nationality: "",
      url: "",
    },
    constructorStatus: {
      constructorId: 'mercedes',
      Status: [{
        count: "",
        status: "",
        statusId: "",
      }]
    },
    raceWins: ""
  },
  isLoading: false,
  errors: ""
}


export const getConstructorInfoDataPageReducer = handleActions({

  [actions.GET_CONSTRUCTOR_INFO_REQUEST.toString()]: (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null
    };
  },
  [actions.GET_CONSTRUCTOR_INFO_SUCCESS.toString()]: (state, { payload }) => {

    return {
      ...state,
      isLoading: false,
      constructorInfoData: payload.response
    }
  },
  [actions.GET_CONSTRUCTOR_INFO_FAIL.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  }
}, defaultState)

