const initialDialogState = {
  is_open: false,
  data: {}
}

const dialogReducer = (state = initialDialogState, action) => {
  switch (action.type) {
    case "OPEN_DIALOG":
      return { is_open: true, data: action.payload }
    case "CLOSE_DIALOG":
      return { is_open: false, data: {} }
    default:
      return state
  }
}

const initialAircraftState = {}

const aircraftReducer = (state = initialAircraftState, action) => {
  switch (action.type) {
    case "UPDATED_AIRCRAFT_NAME":
      return { ...state, name: action.value }
    case "UPDATED_AIRCRAFT_DESCRIPTION":
      return { ...state, description: action.value }
    case "UPDATED_AIRCRAFT_SERIAL":
      return { ...state, serial: action.value }
    case "UPDATED_AIRCRAFT_MODEL":
      return { ...state, model: action.value }
    default:
      return state
  }
}



export { dialogReducer, aircraftReducer }