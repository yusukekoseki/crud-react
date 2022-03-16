import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from "react-cookie"
import { getList } from "../../api/rest"
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
  const [aircrafts, setAircrafts] = useState([])
  const [cookies, _, __] = useCookies()

  const actions = [
    {
      icon: 'edit',
      tooltip: 'Edit Record',
      onClick: (_, d) => dispatch({ type: "OPEN_DIALOG", payload: d })
    },
    {
      icon: 'delete',
      tooltip: 'Delete Record',
      onClick: (_, d) => dispatch({ type: "DELETE_ROW", payload: d })
    }
  ]

  useEffect(() => {
    (async () => {
      setAircrafts(
        await getList(aircraft_endpoint, cookies.access_token)
      )
    })()
  }, [dialogState.is_open])

  return(
    <TableList columns={columns} payloads={aircrafts} actions={actions} />
  )
}

export default AircraftList