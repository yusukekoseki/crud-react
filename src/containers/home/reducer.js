const initialDialogState = {
  is_open: false,
  data: {}
}

const dialogReducer = (state = initialDialogState, action) => {
  switch (action.type) {
    case "OPEN_DIALOG":
      return { editable_open: true, data: action.payload }
    case "OPEN_DIALOG_FOR_CREATION":
      return { creatable_open: true, data: {} }
    case "CLOSE_DIALOG":
      return { editable_open: false, creatable_open: false, data: {} }
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
      return { ...state, model_id: action.value }
    case "UPDATED_AIRCRAFT_ORGANIZATION":
      return { ...state, organization_id: action.value }
    default:
      return state
  }
}



export { dialogReducer, aircraftReducer }