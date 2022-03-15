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
  payloads: {}
}


const TableList = React.memo(IFTable => {

  const [modal, setModal] = React.useState({ open: false, rowData: {} })
  const [columns,setColumns]= useState([])

  const openDialog = items => {
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
            <Typography>
              Name: {items.name}
            </Typography>
            <Typography>
              Description: {items.description}
            </Typography>
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

  console.log(modal.rowData, "!--------")

  return (
    <>
      <MaterialTable
        title={IFTable.name}
        columns={IFTable.columns}
        data={IFTable.payloads}
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Record',
            onClick: (_, rowData) => setModal({ open: true, rowData })
          },
          {
            icon: 'delete',
            tooltip: 'Delete Record',
            onClick: (_, rowData) => setModal({ open: true, rowData })
          }
        ]}
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