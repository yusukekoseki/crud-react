import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from "react-cookie"
import { Button, TextField } from "@material-ui/core";
import { updateData, getList } from "../../api/rest"
import TableList from "../../components/TableList"
import OnClickDialog from "../../components/OnClickDialog"


const aircraft_endpoint = process.env.REACT_APP_RESTAPI_DOMAIN + "/registration/v1/aircrafts"
const columns = [
  { title: "Name", field: "name" },
  { title: "Description", field: "description" },
  { title: "Serial", field: "serial" },
  { title: "Model", field: "model_id" },
  { title: "Organization", field: "organization.name" },
]

const AircraftList = () => {

  const dispatch = useDispatch()
  const dialogState = useSelector(state => state.dialog)
  const aircraftState = useSelector(state => state.aircraft)
  const [cookies, _, __] = useCookies()

  const updateAircraft = async () => {
    await updateData(aircraft_endpoint + "/" + dialogState.data.id, aircraftState, cookies.access_token)
  }

  const buttons = [
    {
      label: "SAVE",
      color: "primary",
      func: () => updateAircraft()
    },
    {
      label: "CLOSE",
      color: "secondary",
      func: () => dispatch({ type: "CLOSE_DIALOG" })
    }
  ]

  return(
    <OnClickDialog buttons={buttons}>
      {
        columns.map(clm => {
          const defaultValue = clm.title === "Organization" ? dialogState.data.organization.name : dialogState.data[clm.field]
          return (
            <div key={clm.title}>
              <TextField
               id={clm.field}
               label={clm.title}
               variant="standard"
               defaultValue={defaultValue}
               onChange={e => dispatch({ type: "UPDATED_AIRCRAFT_" + clm.title.toUpperCase(), value: e.target.value })}
              />
            </div>
          )
        })
      }
    </OnClickDialog>
  )
}

export default AircraftList