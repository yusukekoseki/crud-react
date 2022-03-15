import React, { useState } from "react"
import "../App.css"
import AircraftList from "../containers/home/AircraftList"


const HomePage = () => {

  return (
    <>
      <h1>登録機体一覧</h1>
      <AircraftList />
    </>
  )
}

export default HomePage