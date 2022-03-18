import React,{useState, useEffect } from "react"
import "../assets/style.css"
import MaterialIcon from 'react-google-material-icons'
import Icon from '@material-ui/core/Icon'
import MaterialTable from 'material-table'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from "@material-ui/core"


const TableList = React.memo(props => {
  const { name = "default", columns, payloads, actions } = props

  return (
    <>
      <MaterialTable
        title={name}
        columns={columns}
        data={payloads}
        actions={actions}
        options={{
          showTitle: false,
          paging: false,
          maxBodyHeight: 600,
          headerStyle: { position: 'sticky', top: 0 ,backgroundColor : '#f4f4f4' }
        }}
      />
    </>
  )
})

export default TableList