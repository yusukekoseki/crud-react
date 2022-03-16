const initialState = {
  is_open: false,
  data: {}
}

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {
    case "OPEN_DIALOG":
      return { is_open: true, data: action.payload }
    case "CLOSE_DIALOG":
      return { is_open: false, data: {} }
    default:
      return state
  }
}

export default dialogReducer