import React from "react";
import './Input.css'

const Input = (props) => {
  return(
      <input type={props.text} placeholder={props.placeholder}/>
  )
}
export default Input;