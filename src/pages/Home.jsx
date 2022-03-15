import React, { useState } from "react"
import AircraftList from "../containers/home/AircraftList"


const HomePage = React.memo(() => {

  return (
    <>
      <h1>登録機体一覧</h1>
      <AircraftList />
    </>
  )
})

export default HomePage