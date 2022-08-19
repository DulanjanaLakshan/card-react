import React from "react";
import './Buton.css'

const Button = (props) => {
    return(
        <button type={props.type} className='button'>{props.childName}</button>
    )
}
export default Button;