import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from "react-cookie"
import { TextField } from "@material-ui/core"
import { registerAircraft } from "../../apis/aircraft"
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

const CreatableAircraftDialog = () => {

  const dispatch = useDispatch()
  const aircraftState = useSelector(state => state.aircraft)
  const [cookies, _, __] = useCookies()

  const registerAircraftFunc = async () => {
    const aircraft = new Aircraft(aircraftState)
    await registerAircraft(aircraft, cookies.access_token)
  }

  const buttons = [
    {
      label: "SAVE",
      color: "primary",
      onClick: () => registerAircraftFunc()
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
          return (
            <div key={clm.title}>
              <TextField
               id={clm.field}
               label={clm.title}
               variant="standard"
               onChange={e => dispatch({ type: "UPDATED_AIRCRAFT_" + clm.title.toUpperCase(), value: e.target.value })}
              />
            </div>
          )
        })
      }
    </OnClickDialog>
  )
}

export default CreatableAircraftDialog