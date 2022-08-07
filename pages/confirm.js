/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import tw from 'tailwind-styled-components'
import Map from "./components/Map"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RideSelector from './RideSelector'
import WheelSelector from './WheelSelector'
import Link from 'next/link'

const confirm = () => {

    const router = useRouter()
    const { pickup, dropoff, ridetype } = router.query

    const [ pickupCoordinates, setPickupCoordinates ] = useState([0, 0])
    const [ dropoffCoordinates, setDropCoordinates ] = useState([0, 0])

    const getPickupCoordinates = (pickup) => {
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

    const getDropoffCoordinates = (dropoff) => {
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
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

if (ridetype == "car") {
    return (
        <Wrapper>
            <BackButtonContainer>
            <Link href={{
            pathname: "/search",
            query: {
              ridetype: "car"
            }
          }}>
                <BackButton src= "https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_1280.png"/>
                </Link>
            </BackButtonContainer>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                {/*Ride Selector*/}
                <RideSelector
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                {/*Confirm Button */}
                <ConfirmButtonContainer>
                    <Link href = "/progress">
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                    </Link>
                </ConfirmButtonContainer>
                
    
            </RideContainer>
        </Wrapper>
      )
} else if (ridetype == "wheel") {
    return (
        <Wrapper>
            <BackButtonContainer>
            <Link href={{
            pathname: "/search",
            query: {
              ridetype: "wheel"
            }
          }}>
                <BackButton src= "https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_1280.png"/>
                </Link>
            </BackButtonContainer>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <WheelContainer>
                {/*Ride Selector*/}
                <WheelSelector
                    pickupCoordinates={pickupCoordinates}
                    dropoffCoordinates={dropoffCoordinates}
                />
                {/*Confirm Button */}
                <ConfirmButtonContainer>
                <Link href="/progress">
                    <ConfirmButton>
                        Confirm Wheels
                    </ConfirmButton>
                    </Link>
                </ConfirmButtonContainer>
                
    
            </WheelContainer>
        </Wrapper>
      )

}
  
}

export default confirm

const Wrapper = tw.div`
    flex flex-col h-screen
`
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const WheelContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`
const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-10 py-3 text-center text-xl cursor-pointer hover:scale-105
`

const BackButtonContainer = tw.div`
    absolute top-4 left-4 z-10
`

const BackButton = tw.img`
    flex flex-1 bg-white h-10 my-3 mx-3 rounded-full shadow-md transform hover:scale-105 transition cursor-pointer object-contain
`
