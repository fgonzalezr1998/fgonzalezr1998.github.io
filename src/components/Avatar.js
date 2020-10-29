import React from "react"

function Avatar(props) {
    return(
        <div>
            <img src={props.img} alt="Avatar" />
            <h2>{props.name}</h2>
        </div>
    );
}

export default Avatar;