import React,{useState, useEffect} from "react"
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


const TableList= IFTable => {

  const [status, setStatus] = React.useState({ open: false,rowData:{} });
  const [columns,setColumns]= useState([])

  return (
    <>
      <MaterialTable
        title={IFTable.name}
        columns={IFTable.columns}
        data={IFTable.payloads}

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
        //       const dataUpdate = [...data];
        //       const index = oldData.tableData.id;
        //       dataUpdate[index] = newData;
        //       setData([...dataUpdate]);
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
        onRowClick={(event, rowData) => {
          event.preventDefault();
          setStatus({ open: true,rowData:rowData });
          }}
        localization={{ header: { actions: '' } }}
      />
      <Dialog
        open={status.open}
        aria-labelledby="draggable-dialog-title"
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle id="draggable-dialog-title">詳細</DialogTitle>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button
          onClick={() => setStatus({ open: false,rowData:status.rowData })}
          color="primary"
        >
        </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default TableList