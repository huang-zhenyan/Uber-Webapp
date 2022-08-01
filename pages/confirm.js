import React from 'react'
import tw from 'tailwind-styled-components'
import Map from "./components/Map"
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RideSelector from './RideSelector'
import Link from 'next/link'

const confirm = () => {

    const router = useRouter()
    const { pickup, dropoff } = router.query
    

    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropCoordinates ] = useState()

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

  return (
    <Wrapper>
        <Map
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
        />
        <BackButtonContainer>
            <Link href="/search">
            <BackButton src= "https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_1280.png"/>
            </Link>
        </BackButtonContainer>
        <RideContainer>
            {/*Ride Selector*/}
            <RideSelector/>
            {/*Confirm Button */}
            <ConfirmButtonContainer>
                <ConfirmButton>
                    Confirm UberX
                </ConfirmButton>
            </ConfirmButtonContainer>

        </RideContainer>
    </Wrapper>
  )
}

export default confirm

const Wrapper = tw.div`
    flex flex-col h-screen
`
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`
const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-3 text-center text-xl
`

const BackButtonContainer = tw.div`
`

const BackButton = tw.img`
    flex flex-1 bg-gray-200 h-10 my-3 mx-3 rounded-full transform hover:scale-105 transition cursor-pointer
`
