import React from "react";
import './Buton.css'

const Button = (props) => {
    return(
        <button type={props.type}>{props.childName}</button>
    )
}
export default Button;