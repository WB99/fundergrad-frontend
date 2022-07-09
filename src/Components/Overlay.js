import React from 'react'
import classes from "./Overlay.module.css"
export default function Overlay(props) {
  return (
    <div className={classes.root} onClick={props.toggle}/>
  )
}
