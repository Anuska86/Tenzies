import React from "react";

export default function Die(props) {
    return (
        <button className="die">
            {props.value}
        </button>
    );
}