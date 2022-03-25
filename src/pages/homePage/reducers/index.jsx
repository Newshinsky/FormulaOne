import { handleActions } from "redux-actions";
import * as actions from "../actions/index";


const defaultState = {
  raceScheduleData: [{
    Circuit: {
      Location: {
        country: "",
        lat: "",
        locality: "",
        long: "",
      },
      circuitId: "",
      circuitName: "",
      url: "",
    },
    CountryInfo: {
      alpha2: "",
      alpha3: "",
      countryCallingCodes: [''],
      currencies: [''],
      emoji: "",
      ioc: "",
      languages: [''],
      name: "",
      status: "",
    },
    FirstPractice: { date: '', time: '' },
    Qualifying: { date: '', time: '' },
    SecondPractice: { date: '', time: '' },
    ThirdPractice: { date: '', time: '' },
    date: "",
    raceName: "",
    round: "",
    season: "",
    time: "",
    url: "",
  }
  ],
  isLoading: false,
  errors: ""
}


export const getRaceScheduleDataDataPageReducer = handleActions({

  [actions.GET_RACE_SCHEDULE_REQUEST.toString()]: (state) => {
    return {
      ...state,
      isLoading: true,
      errors: null
    };
  },
  [actions.GET_RACE_SCHEDULE_SUCCESS.toString()]: (state, { payload }) => {


    let clone = JSON.parse(JSON.stringify(payload.response.MRData.RaceTable.Races))
    let lookup = require('country-data').lookup;
    let result = clone.map(el => ({ ...el, CountryInfo: lookup.countries({ name: el.Circuit.Location.country })[0] }))

    return {
      ...state,
      isLoading: false,
      raceScheduleData: result
    }
  },
  [actions.GET_RACE_SCHEDULE_FAIL.toString()]: (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      errors: payload.response
    }
  }
}, defaultState)

