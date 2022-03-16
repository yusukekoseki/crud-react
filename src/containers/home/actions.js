const openDialog = payload => ({
  type: "OPEN_DIALOG",
  payload: payload
})

const closeDialog = () => ({
  type: "CLOSE_DIALOG"
})

export default { openDialog, closeDialog }