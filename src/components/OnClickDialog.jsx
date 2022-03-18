import React,{useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
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
  const { data, children, buttons } = props

  return (
    <Dialog
      open={true}
      aria-labelledby="draggable-dialog-title"
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle id="draggable-dialog-title">詳細</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        {
          buttons.map(button => (
            <Button
              key={button.label}
              onClick={button.onClick}
              color={button.color}
            >
              {button.label}
            </Button>
          ))
        }
      </DialogActions>
    </Dialog>
  )
})

export default TableList