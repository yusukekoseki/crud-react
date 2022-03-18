import React, { useState, useEffect } from "react"
import TableList from "../../components/TableList"
import OnClickDialog from "../../components/OnClickDialog"
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from "react-cookie"
import { getAircraftList, deleteAircraft } from "../../apis/aircraft"
import { useAsyncEffect } from "../../utils/hook"
import  Button from "../../components/Button"


const aircraft_endpoint = process.env.REACT_APP_RESTAPI_DOMAIN + "/registration/v1/aircrafts"
const columns = [
  { title: "Name", field: "name" },
  { title: "Description", field: "description" },
  { title: "Serial", field: "serial" },
  { title: "Customize", field: "is_customized" },
  { title: "Color", field: "color" },
  { title: "Model", field: "model_id" },
  { title: "Organization", field: "organization.name" },
]

const AircraftList = React.memo(() => {

  const dispatch = useDispatch()
  const dialogState = useSelector(state => state.dialog)
  const [aircrafts, setAircrafts] = useState([])
  const [deleted, setDeleted] = useState("")
  const [cookies, _, __] = useCookies()

  const deleteAction = async id => {
    await deleteAircraft(id, cookies.access_token)
    setDeleted(id)
  }

  const actions = [
    {
      icon: 'edit',
      tooltip: 'Edit Record',
      onClick: (_, d) => dispatch({ type: "OPEN_DIALOG", payload: d })
    },
    {
      icon: 'delete',
      tooltip: 'Delete Record',
      onClick: (_, d) => deleteAction(d.id)
    }
  ]

  useAsyncEffect(async () => {
    setAircrafts(await getAircraftList(cookies.access_token))
  }, [dialogState.editable_open, dialogState.creatable_open, deleted])

  return(
    <>
      <Button onClick={() => dispatch({ type: "OPEN_DIALOG_FOR_CREATION" })}  variant={"contained"} color={"primary"}>
        Create
      </Button>
      <TableList columns={columns} payloads={aircrafts} actions={actions} />
    </>
  )
})

export default AircraftList