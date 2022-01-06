import React, { useState } from "react"
import TravelTile from "./TravelTile"

const TravelList = props => {

    const [idToCross, setIdToCross] = useState(['a'])
    const favPlace = props.data.favoritePlaceId
    let newDiv = null

    const locationArray = props.data.places.map(location =>{

        const crossLocation = () =>{
            debugger
            const removeIndex = idToCross.indexOf(location.id)
                if(removeIndex >= 0){
                    setIdToCross(idToCross.splice(removeIndex,1))
                }else{
                    setIdToCross(idToCross.push(location.id))
                }
        }

        //debugger
        // let sass = null
        // if(idToCross.indexOf(location.id) >= 0){
        //     sass = "done"
        // }


        if(idToCross === favPlace){
            newDiv = <div>What a beauty!</div>
        }



        return <TravelTile
        key={location.id}
        name={location.name}
        id={location.id}
        toCross={idToCross}
        crossLocation= {crossLocation}
        //done={sass}
        />
    })

    return(
        <>
            {locationArray}
            {newDiv}
        </>
    )
}

export default TravelList