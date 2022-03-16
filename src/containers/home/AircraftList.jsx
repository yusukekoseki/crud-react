import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from "react-cookie"
import { getList } from "../../api/rest"
import TableList from "../../components/TableList"
import Dialog from "../../components/Dialog"


const api_endpoint = process.env.REACT_APP_RESTAPI_DOMAIN + "/registration/v1/aircrafts"
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
  const [cookies, setCookie, removeCookie] = useCookies()

  const actions = [
    {
      icon: 'edit',
      tooltip: 'Edit Record',
      onClick: (_, d) => dispatch({ type: "OPEN_DIALOG", payload: d })
    },
    {
      icon: 'delete',
      tooltip: 'Delete Record',
      onClick: e => dispatch({ type: "DELETE_ROW", payload: e })
    }
  ]

  useEffect(() => {
    (async () => {
      setAircrafts(
        await getList(api_endpoint, cookies.access_token)
      )
    })()
  }, [])

  return(
    <>
      <TableList columns={columns} payloads={aircrafts} actions={actions} />
      { dialogState.is_open && <Dialog data={dialogState.data} /> }
    </>
  )
}

export default AircraftList