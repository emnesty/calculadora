/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import "./Button.css"

export default (props) => {
  let classes = "button "
  classes += props.double ? "double " : ""
  classes += props.triple ? "triple " : ""
  classes += props.operation ? "operation " : ""

  return (
    <>
      <button onClick={props.click} className={classes}>
        {props.label}
      </button>
    </>
  )
}
