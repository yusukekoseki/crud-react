import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from "react-cookie"
import { TextField } from "@material-ui/core"
import { updateAircraft } from "../../apis/aircraft"
import OnClickDialog from "../../components/OnClickDialog"
import Aircraft from "../../entities/aircraft"


const columns = [
  { title: "Name", field: "name" },
  { title: "Description", field: "description" },
  { title: "Serial", field: "serial" },
  { title: "Customize", field: "is_customized" },
  { title: "Color", field: "color" },
  { title: "Model", field: "model_id" },
  { title: "Organization", field: "organization.name" },
]

const EditableAircraftDialog = () => {

  const dispatch = useDispatch()
  const dialogState = useSelector(state => state.dialog)
  const aircraftState = useSelector(state => state.aircraft)
  const [cookies, _, __] = useCookies()

  const updateAircraftFunc = async () => {
    await updateAircraft(dialogState.data.id, aircraftState, cookies.access_token)
  }

  const buttons = [
    {
      label: "SAVE",
      color: "primary",
      onClick: () => updateAircraftFunc()
    },
    {
      label: "CLOSE",
      color: "secondary",
      onClick: () => dispatch({ type: "CLOSE_DIALOG" })
    }
  ]

  return(
    <OnClickDialog buttons={buttons}>
      {
        columns.map(clm => {
          const defaultValue = clm.title === "Organization" ? dialogState.data.organization.id : dialogState.data[clm.field]
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

export default EditableAircraftDialog