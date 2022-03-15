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
    } from "@material-ui/core";
import Typography from "@material-ui/core/Typography"


const IFTable = {
  name: "Default",
  columns: {},
  payloads: {},
  actions: []
}


const TableList = React.memo(IFTable => {

  const [modal, setModal] = React.useState({ open: false, rowData: {} })
  const [columns,setColumns]= useState([])

  IFTable.actions.map(action => {
    action.onClick = (_, d) => setModal({open: true, rowData: d})
  })

  const openDialog = item => {
    return (
      <Dialog
        open={modal.open}
        aria-labelledby="draggable-dialog-title"
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle id="draggable-dialog-title">詳細</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {item.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button
          onClick={() => setModal({ open: false })}
          color="primary"
        >
         Close
        </Button>
        </DialogActions>
      </Dialog>
    )
  }

  return (
    <>
      <MaterialTable
        title={IFTable.name}
        columns={IFTable.columns}
        data={IFTable.payloads}
        actions={IFTable.actions}
        editable={{
        // onRowAdd: newData =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       setData([...data, newData]);
        //
        //       resolve();
        //     }, 1000)
        //   }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       const dataUpdate = [...data]
        //       const index = oldData.tableData.id
        //       dataUpdate[index] = newData
        //       setData([...dataUpdate])
        //
        //       resolve();
        //     }, 1000)
        //   }),
        // onRowDelete: oldData =>
        //   new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //       const dataDelete = [...data]
        //       const index = oldData.tableData.id
        //       dataDelete.splice(index, 1)
        //       setData([...dataDelete])
        //
        //       resolve()
        //     }, 1000)
        //   }),
      }}
        options={{
          showTitle: false,
          paging: false,
          maxBodyHeight: 600,
          headerStyle: { position: 'sticky', top: 0 ,backgroundColor : '#f4f4f4' }
        }}
      />
      { modal.open && openDialog(modal.rowData) }
    </>
  )
})

export default TableList