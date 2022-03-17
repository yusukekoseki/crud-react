import React, { useState, useEffect } from "react"
import TableList from "../../components/TableList"
import OnClickDialog from "../../components/OnClickDialog"
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from "react-cookie"
import { getAircraftList, deleteAircraft } from "../../api/aircraft"
import { useAsyncEffect } from "../../utils/hook"


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
    console.log(deleted)
    setAircrafts(await getAircraftList(cookies.access_token))
  }, [dialogState.is_open, deleted])

  return(
    <TableList columns={columns} payloads={aircrafts} actions={actions} />
  )
}

export default AircraftList