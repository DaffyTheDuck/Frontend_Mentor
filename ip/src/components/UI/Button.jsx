import React from 'react';
import './Button.scss'

export default function Button(props) {
    let customClass = 'button ' + props.className;
    return (
        <button onClick={props.onClick} className={customClass}>{props.children}</button>
    )
}
