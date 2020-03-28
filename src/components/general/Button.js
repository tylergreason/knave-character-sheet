import React from 'react' 

const Button = (props) => {
    return(
        <button onSubmit={props.onClick}>{props.text}</button>
    )
}

export default Button 