import React,{useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import "../assets/style.css"
import MaterialTable from 'material-table'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography"


const TableList = React.memo(props => {
  const dispatch = useDispatch()
  const { data } = props

  return (
    <Dialog
      open={true}
      aria-labelledby="draggable-dialog-title"
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle id="draggable-dialog-title">詳細</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {data.name}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
      <Button
        onClick={() => dispatch({ type: "CLOSE_DIALOG" })}
        color="primary"
      >
       Close
      </Button>
      </DialogActions>
    </Dialog>
  )
})

export default TableList