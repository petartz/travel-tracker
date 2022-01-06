import React, { useState } from "react"

const TravelTile = props => {


    //debugger
    return(
        <>
            <h2 onClick={props.crossLocation} className="nana">
                {props.name}
            </h2>
        </>
    )
}

export default TravelTile