import React, { useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import { getList } from "../../api/rest"
import TableList from "../../components/TableList"


const columns = [
  { title: "ID", field: "id" },
  { title: "Name", field: "name" },
  { title: "Description", field: "description" },
  { title: "Serial", field: "serial" }
]

const AircraftList = () => {

  const [aircrafts, setAircrafts] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies()

  useEffect(() => {

    (async () => {
      setAircrafts(
        await getList(process.env.REACT_APP_RESTAPI_DOMAIN + "/registration/v1/aircrafts", cookies.access_token)
      )
    })()

  }, [])

  return(
    <>
      <TableList columns={columns} payloads={aircrafts} />
    </>
  )
}

export default AircraftList