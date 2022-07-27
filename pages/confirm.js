import React from 'react'
import tw from 'tailwind-styled-components'
import Map from "./components/Map"
import { useEffect, useState } from 'react'

const confirm = () => {

    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropCoordinates ] = useState()

    const getPickupCoordinates = () => {
        const pickup = "Santa Monica";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiYmVlZm9mdGVycm9yIiwiYSI6ImNsNXZ1bzR4ajBkanEzaW56c2x3dXZ6NWEifQ.1S1MB-l_0wBg1BfOvqLNVA',
            limit: 1
        }))
        .then(response => response.json())
        .then(data => {
            setPickupCoordinates(data.features[0].center)
        })
    }

    const getDropoffCoordinates = () => {
        const dropoff = "Los Angeles";
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
            access_token: 'pk.eyJ1IjoiYmVlZm9mdGVycm9yIiwiYSI6ImNsNXZ1bzR4ajBkanEzaW56c2x3dXZ6NWEifQ.1S1MB-l_0wBg1BfOvqLNVA',
            limit: 1
        }))
        .then(response => response.json())
        .then(data => {
            setDropCoordinates(data.features[0].center)
        })
    }

    useEffect (()=>{
        getPickupCoordinates();
        getDropoffCoordinates();
    }, [])

  return (
    <Wrapper>
        <Map/>
        <RideContainer>
            {/*Ride Selector*/}

            {/*Confirm Button */}
            {pickupCoordinates}
            {dropoffCoordinates}

        </RideContainer>
    </Wrapper>
  )
}

export default confirm

const Wrapper = tw.div`
    flex flex-col h-screen
`
const RideContainer = tw.div`
    flex-1
`

