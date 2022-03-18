import React,{useState, useEffect } from "react"
import MaterialTable from 'material-table'
import { Button } from "@material-ui/core"


const TableList = React.memo(props => {
  const { onClick, color, variant, children } = props

  return (
    <Button onClick={onClick} color={color} variant={variant}>
      { children }
    </Button>
  )
})

export default TableList