import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import AircraftList from "../containers/home/AircraftList"
import EditableAircraftDialog from "../containers/home/EditableAircraftDialog"


const HomePage = React.memo(() => {

  const dialogState = useSelector(state => state.dialog)

  return (
    <>
      <h1>登録機体一覧</h1>
      <AircraftList />
      { dialogState.is_open &&  <EditableAircraftDialog /> }
    </>
  )
})

export default HomePage