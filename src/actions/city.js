import * as cityActions from '../constants/city'


const INIT_CITY = "INIT_CITY";
const UPDATE_CITY = "UPDATE_CITY"

export function initCity(data) {
    return {
        type:cityActions.INIT_CITY,
        data
    }
  }

  export function updateCity(data) {
    return {
        type:cityActions.UPDATE_CITY,
        data
    }
  }